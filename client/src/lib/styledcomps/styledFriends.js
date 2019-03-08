import styled from "@emotion/styled";

export const StyledFriends = styled.div`
  height: 45vh;
  .friends {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 2%;
    overflow-y: scroll;
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

  .friend {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2%;
    width: 15%;
    border-radius: 15px;
    border: 1px solir grey;
    background-color: #494944;
    color: white;
  }
  .friend img {
    width: 80%;
    border-radius: 100%;
    border: 1px solid black;
  }
  .userBigCard {
    display: flex;
    height: 50vh;
  }
`;
