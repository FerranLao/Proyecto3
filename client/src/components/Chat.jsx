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
      message: "",
      chatid: ""
    };
  }

  componentDidMount() {
    this.getchat();
  }

  getchat = () => {
    const { chatid, dispatch } = this.props;
    this.setState({ chatid });
    Chatapi.getchat(chatid).then(({ data }) => {
      console.log(data)
      dispatch(getChat(data));
      this.scrollbottom();
    });
  };

  componentWillUnmount() {
    const { chatid, dispatch } = this.props;
    Chatapi.exitchat(chatid);
    dispatch(getChat([]));
  }
  handlechange = ({ target }) => {
    this.setState({ message: target.value });
  };

  scrollbottom() {
    const chat = document.querySelector(".chatcontainer");
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
  }

  sendmessage = e => {
    e.preventDefault()
    const { message } = this.state;
    const { chatid, user } = this.props;
    Chatapi.sendMessage(message, chatid, user._id).then(e =>
      this.scrollbottom()
    );
    this.setState({ message: "" });
  };

  member(from) {
    const { members } = this.props;
    let member = {};
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
        <section>
          <div className="chat ">
            <ul  onChange={()=>{this.scrollbottom()}} className="chatcontainer  scroll scrollbar">
              {chat.map((e,i) =>
                e ? (
                  <Messages
                    me={e.from === user._id}
                    member={this.member(e.from)}
                    data={e}
                    key={i}
                  />
                ) : null
              )}
            </ul>
          </div>
        </section>
        <form className="form"
          onSubmit={e => {
            this.sendmessage(e);
          }}
        >
          <Input func={this.handlechange} data={message} />
        </form>
      </StyledChat>
    );
  }
}

export const Chat = connect(state => ({ user: state.user, chat: state.chat }))(
  _Chat
);

