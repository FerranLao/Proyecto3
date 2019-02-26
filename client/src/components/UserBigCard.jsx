import React from "react"

export const UserBigCard = ({user}) =>{
    const {username,SteamUser,image}=user;
    return(
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={image} alt={username}/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
         {SteamUser ?
            <img src={username} alt={username}/>:null
         } 
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{username}</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
       </div>
  </div>
</div>
    )
}