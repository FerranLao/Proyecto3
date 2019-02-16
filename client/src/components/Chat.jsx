import React from "react";
import { StyledChat } from "../lib/styledcomps/styledChat";
import { Input } from "./Input";
import { connect } from "react-redux";



export class _Chat extends React.Component {
  constructor() {
    super();
    this.state = { 
      messagearray:[],
      message: "" };
  }

  render() {
    return (
      <StyledChat>
        <div className="chatter">
          <div className="chatter_pre_signup">
            <input
              type="text"
              name="chatter_name"
              placeholder="Your name"
              className="chatter_field chatter_name"
            />
            <input
              type="text"
              name="chatter_email"
              placeholder="Your email address"
              className="chatter_field chatter_email"
            />
            <input
              type="submit"
              name="chatter_create_user"
              value="Start Chatting"
              className="chatter_btn chatter_create_user"
            />
          </div>

          <div className="chatter_post_signup">
            <div className="chatter_convo">
              <span className="chatter_msg_item chatter_msg_item_admin">
                <p href="" className="chatter_avatar">
                  <img src="https://lukepeters.me/static/images/avatar_color.jpg" alt="avatar"/>
                </p>
                <strong className="chatter_name">Luke Peters</strong>Hello!
              </span>

              <span className="chatter_msg_item chatter_msg_item_user">
                <p href="" className="chatter_avatar">
                  <img src="http://img.lukepeters.me/jack.jpg" alt="avatar" />
                </p>
                <strong className="chatter_name">Jack Sparrow</strong>Oh hello. Who
                is this?
              </span>

            </div>
            <Input />
          </div>
        </div>

        <div className="pen_data">
          A pen by{" "}
          <a href="http://www.lukepeters.me" >
            Luke Peters
          </a>
        </div>
      </StyledChat>
    );
  }
}

export const Chat = connect(state=>({user:state.user , chat:state.chats}))(_Chat)