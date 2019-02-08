const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const SteamGames = require("../models/SteamGames");
const SteamUser = require("../models/SteamUser");
const CircularJSON = require("circular-json");
const Steam = require("../Steam/Apihandler");
const uploadCloud = require("../multer/cloudinary.js");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

let loginPromise = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, e => (e ? reject(e) : resolve(user)));
  });
};

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (!theUser) return res.json(failureDetails);
    loginPromise(req, theUser)
      .then(() => res.json(req.user))
      .catch(e => res.json({ message: e.message }));
  })(req, res, next);
});

router.post("/image", uploadCloud.single("photo"), (req, res, next) => {
  console.log();
  res.json(req.file);
});

router.post("/signup", (req, res, next) => {
  const { username, password, SteamId } = req.body;
  let { image } = req.body;
  if (username === "" || password === "") {
    res.json({ message: "Indicate username and password" });
    return;
  }
  if (image === "") {
    image =
      "http://www.jdevoto.cl/web/wp-content/uploads/2018/04/default-user-img.jpg";
  }
  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json({ message: "The username already exists" });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({
      username,
      password: hashPass,
      image
    })
      .then(user => {
        res.json({ user });
      })
      .catch(err => {
        res.json({ message: "Something went wrong" });
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/currentuser", (req, res) => {
  const { user } = req;
  if (user) {
    res.json({ user });
  } else {
    res.json({ user: null });
  }
});

router.post("/SteamId", (req, res) => {
  const { id } = req.body;
  Steam.getUser(id)
    .then(e => {
      const profile = e.data.response.players[0];
      Steam.getOwned(id).then(({ data }) => {
        const gameids = data.response.games.map(e => e.appid);
        SteamGames.find({ steam_appid: gameids }).then(gamelist => {
          const OwnedGames = gamelist.map(e => e._id);
          SteamUser.create({ profile, OwnedGames }).then(({ _id }) => {
            User.findByIdAndUpdate(
              req.user._id,
              { SteamUser: _id },
              { new: true }
            ).then(user => {
              req.user = user;
              res.json(user);
            });
          });
        });
      });
    })
    .catch(e => res.json({ message: "Unvalid ID" }));
});

module.exports = router;
