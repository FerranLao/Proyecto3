import styled from "@emotion/styled";

export const StyledUserList = styled.ul`
  font-family: sans-serif;
  width: 20vw;
  height: 30vh;
  margin: 0;
  overflow-y: scroll;

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
