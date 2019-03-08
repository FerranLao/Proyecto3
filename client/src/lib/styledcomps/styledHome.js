import styled from "@emotion/styled";
const backgrounds = [
  "https://wallpaperhd.guru/wp-content/uploads/2017/05/Photos-Download-Bioshock-Backgrounds.jpg",
  "https://www.wallpaperup.com/uploads/wallpapers/2014/04/09/327808/e55f19914fe57135215b06050a093343.jpg",
  "http://pavbca.com/walldb/original/8/6/9/118367.jpg",
  "http://www.teamopenoffice.org/pimages/25/258744/dragonborn-wallpaper.jpg",
  "https://wallpaperaccess.com/full/263060.jpg",
  "https://images.alphacoders.com/645/645989.jpg",
  "http://wallpapers.ae/wp-content/uploads/2017/10/dead_space_funny_player_joystick_dark_monster_sofa_93882_1920x1080.jpg",
  "https://images2.alphacoders.com/582/582734.jpg",
  "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-265236.png",
  "http://www.hdfondos.eu/pictures/2015/0120/1/raiden-metal-gear-solid-wallpaper-72660.jpg",
  "https://images3.alphacoders.com/119/thumb-1920-119635.jpg",
  "https://www.anaitgames.com/images/uploads/2013/03/analisis_luigis_mansion_2_1.jpg"
];

export const StyledHome = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-top:-2vh;
  width: 100vw;
  height: 92vh;
  background-image: url(${backgrounds[Math.floor(Math.random()*backgrounds.length)]});
  background-size:100% 100%;
`;
