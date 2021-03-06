import styled from "@emotion/styled";

export const StyledChat = styled.div`
  body {
    background-color: #f3f3f3;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 100%;
  }

  section,
  .form {
    width: 90%;
    margin: 0 auto;
  }
  .chatcontainer {
    width: 100%;
    height: 30vh;
    overflow-y: scroll;
    border-radius: 10px;
    background-color: #bababa;
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
      box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track-piece {
    }

    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: rgba(255, 0, 0, 0.8);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
    ::-webkit-scrollbar-corner {
    }
    ::-webkit-resizer {
    }
    ::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(255, 0, 0, 0.4);
    }
  }

  .chat ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .chat ul li {
    margin: 45px 0 0 0;
    font-weight: 300;
  }
  .chat ul li a.user {
    margin: -30px 0 0 0;
    display: block;
    color: #333;
  }
  .chat ul li a.user img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #f3f3f3;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  .chat ul li .date {
    font-size: 14px;
    color: #a6a6a6;
  }
  .chat ul li .message {
    display: block;
    padding: 10px;
    position: relative;
    color: #fff;
    font-size: 15px;
    background-color: #2ecc71;
    border-radius: 3px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  .chat ul li .message:before {
    content: "";
    position: absolute;
    border-top: 16px solid rgba(0, 0, 0, 0.15);
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
  }
  .chat ul li .message:after {
    content: "";
    position: absolute;
    top: 0;
    border-top: 17px solid #2ecc71;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
  }
  .chat ul li .message.blur p {
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
  }
  .chat ul li .message.blur .hider {
    opacity: 1;
    z-index: 1;
  }
  .chat ul li .message p {
    margin: 0;
    padding: 0;
    transition: all 0.1s;
  }
  .chat ul li .message .hider {
    opacity: 0;
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    margin: -10px;
    text-align: center;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: all 0.1s;
  }
  .chat ul li .message .hider span {
    display: block;
    position: relative;
    top: 50%;
    font-size: 16px;
    transform: translateY(-50%);
  }
  .chat ul li.other a.user {
    float: right;
  }
  .chat ul li.other .date {
    float: right;
    margin: -20px 10px 0 0;
  }
  .chat ul li.other .message {
    
    margin: 0 90px 0 0;
  }
  .chat ul li.other .message:before {
    margin: -9px -16px 0 0;
    right: 0;
  }
  .chat ul li.other .message:after {
    content: "";
    right: 0;
    margin: 0 -15px 0 0;
  }
  .chat ul li.you a.user {
    float: left;
  }
  .chat ul li.you .date {
    float: left;
    margin: -20px 0 0 10px;
  }
  .chat ul li.you .message {
    margin: 0 0 0 90px;
  }
  .chat ul li.you .message:before {
    
    margin: -9px 0 0 -16px;
    left: 0;
  }
  .chat ul li.you .message:after {
    content: "";
    left: 0;
    margin: 0 0 0 -15px;
  }
  .username {
    text-align: center;
  }
`;
// .chatcontainer {
//   width: 100%;
//   height: 30vh;
//   overflow-y: scroll;
//   border-radius: 10px;
//   background-color: #bababa;

// }
// .chatimg {
//   width: 100%;
//   border-radius: 100%;
// }

// .infochat {
//   margin: 3px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   width: 10%;
// }
// .me,
// .notme {
//   display: flex;
//   justify-content: space-around;
//   margin: 1.5%;
//   border-radius: 15px;
//   width:98%
// }

// .me {
//   flex-direction:row-reverse;
//   background: #00ce71;
//   .message{
//     justify-content:flex-start;
//   }
// }
// .notme {
//   background-color: #008ebd;
// }
// .message {
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-end;
//   width: 70%;
//   padding: 5%;
//   background: none;
// }
