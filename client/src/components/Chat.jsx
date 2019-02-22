import React from "react";
import { StyledChat } from "../lib/styledcomps/styledChat";
import { Input } from "./Input";
import { connect } from "react-redux";
import { Chatapi } from "../lib/Chatapi";

export class _Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    const { chatid } = this.props;
    Chatapi.getchat(chatid).then(e => console.log(e));
  }

  handlechange = ({ target }) => {
    this.setState({ message: target.value });
  };

  sendmessage = e => {
    const { message } = this.state;
    const { chatid } = this.props;
    Chatapi.sendMessage(message, chatid);
    this.setState({ message: "" });
  };
  render() {
    const { message } = this.state;
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
            <div className="chatter_convo" />

            <Input func={this.handlechange} data={message} />
            <button
              onClick={e => {
                this.sendmessage(e);
              }}
            >
              send
            </button>
          </div>
        </div>
      </StyledChat>
    );
  }
}

export const Chat = connect(state => ({ user: state.user, chat: state.chats }))(
  _Chat
);
