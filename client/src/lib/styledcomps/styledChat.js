import styled from "@emotion/styled";

export const StyledChat = styled.div`
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
  .chatimg {
    width: 100%;
    border-radius: 100%;
  }

  .infochat {
    margin: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 10%;
  }
  .me,
  .notme {
    display: flex;
    justify-content: space-around;
    margin: 1.5%;
    border-radius: 15px;
    width:98%  
  }

  .me {
    flex-direction:row-reverse;
    background: #00ce71;
    .message{
      justify-content:flex-start;
    }
  }
  .notme {
    background-color: #008ebd;
  }
  .message {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 70%;
    padding: 5%;
    background: none;
  }
`;
