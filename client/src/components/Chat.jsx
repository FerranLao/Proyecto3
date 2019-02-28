import React from "react";
import { StyledChat } from "../lib/styledcomps/styledChat";
import { Input } from "./Input";
import { connect } from "react-redux";
import { Chatapi } from "../lib/Chatapi";
import { Messages } from "./Messages";
import { getChat } from "../lib/redux/actions";

export class _Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    const { chatid, dispatch } = this.props;
    Chatapi.getchat(chatid).then(({ data }) => dispatch(getChat(data)));
  }
  componentWillUnmount() {
    const { chatid } = this.props;
    Chatapi.exitchat(chatid);
  }
  handlechange = ({ target }) => {
    this.setState({ message: target.value });
  };

  sendmessage = e => {
    const { message } = this.state;
    const { chatid, user } = this.props;
    Chatapi.sendMessage(message, chatid, user._id);
    this.setState({ message: "" });
  };

  member(from) {
    const { members } = this.props;
    let member;
    members.forEach(e => {
      if (e._id === from) {
        member = e;
      }
    });
    return member;
  }
  render() {
    const { message } = this.state;
    const { chat, user } = this.props;
    return (
      <StyledChat>
        <div>
          <div className="chatcontainer scroll scrollbar">
            {chat.map(e => (
              <Messages
                me={e.from === user._id}
                member={this.member(e.from)}
                data={e}
                key={e._id}
              />
            ))}
          </div>
          <Input func={this.handlechange} data={message} />
          <button
            onClick={e => {
              this.sendmessage(e);
            }}
          >
            send
          </button>
        </div>
      </StyledChat>
    );
  }
}

export const Chat = connect(state => ({ user: state.user, chat: state.chat }))(
  _Chat
);
