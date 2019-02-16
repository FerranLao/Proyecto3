import React from "react"

export const Messages = ({user,isme,message})=>{
    return ( 
        <span className="chatter_msg_item chatter_msg_item_admin">
        <p href="" className="chatter_avatar">
          <img
            src="https://lukepeters.me/static/images/avatar_color.jpg"
            alt="avatar"
          />
        </p>
        <strong className="chatter_name">Luke Peters</strong>Hello!
      </span>
    )
}