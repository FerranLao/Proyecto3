import styled from "@emotion/styled";

export const StyledFriends = styled.div`
  .friends {
    width: 50%;
    display: flex;

    flex-wrap: wrap;
    margin: 2%;
  }

  .friend {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2%;
    width: 28%;
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
  .userBigCard{
    display:flex;
    height:50vh;
  }
`;
