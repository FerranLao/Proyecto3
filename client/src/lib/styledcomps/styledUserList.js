import styled from "@emotion/styled";

export const StyledUserList = styled.ul`
  font-family: sans-serif;
  width: 20vw;
  height: 30vh;
  margin: 0;
  overflow-y: scroll;


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
  #friend-list {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: none;
    list-style-type: none;
    
  }
  .friendbutton {
    display:block;
    opacity:0;
  }
  .friend {
    color: whitesmoke;
    width: 100%;
    height: 60px;
    background: #272728;
    border-radius: 20px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .friend:hover {
    .friendbutton {
      opacity:1;
    }
    background-color:#393939;
  }

  .friend img {
    width: 45px;
    height: 45showpx;
    border-radius: 30px;
    border: 2px solid #aaa;
    object-fit: cover;
    margin-left: 5px;
    margin-right: 10px;
  }

  .friend .name {
    font-size: 18px;
  }

 

  .friend.selected img {
    border-color: white;
  }

 
`;
