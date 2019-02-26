import styled from "@emotion/styled";

export const StyledInvite = styled.div`
  // Setup Enviroment
  html {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    overflow-x: hidden;
    font-family: "Roboto", sans-serif;
  }

  .section {
    width: 100%;
    position: relative;
    margin: 0;
    &__container {
      width: 1010px;
      margin: 0 auto;
      position: relative;
      @media screen and (max-width: 1050px) {
        width: 100%;
      }
      .notification-list {
        width: 95%;
        height: 100px;
        margin: 10px auto;
        position: relative;
        border-radius: 3px;
        background: #ddd;
        // transition: all .5s ease-in;
        &:hover {
          // margin: 30px 0;
          // transform: scale(1.05);
          box-shadow: 0px 5px 15px 0px rgba(50, 50, 50, 0.15);
        }
        @media screen and (max-width: 533px) {
          height: 90px;
        }
        &__image {
          width: 80px;
          height: 80px;
          margin: 10px;
          display: inline-block;
          background: #fff;
          border-radius: 3px;
          box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.25);
          @media screen and (max-width: 533px) {
            width: 70px;
            height: 70px;
          }
        }
        &__info {
          width: calc(94% - 80px);
          height: 80px;
          margin: 10px 0;
          display: inline-block;
          vertical-align: top;
          @media screen and (max-width: 533px) {
            width: calc(92% - 80px);
          }
          @media screen and (max-width: 414px) {
            width: calc(90% - 80px);
          }
          h2 {
            margin: 0;
            font-size: 1.5em;
            font-weight: 300;
            color: #222;
            @media screen and (max-width: 768px) {
              font-size: 1.3em;
            }
            @media screen and (max-width: 533px) {
              font-size: 1.1em;
            }
          }
          .hour,
          .date {
            font-size: 0.7em;
            font-weight: 600;
            border-radius: 3px;
            @media screen and (max-width: 533px) {
              font-size: 0.6em;
            }
          }
          .hour {
            color: #f24b0c;
            margin-right: 10px;
          }
          .date {
            color: #ff802e;
          }
          .buttons {
            position:absolute;
            right:60px;
            top:33px;
            width: 15%;
            display:flex;
            justify-content:space-around;
           
            
          }
          .accept,.reject{
            font-size:25px;
            height:35px;
            padding:3px 7px;
            border-radius:5px;
          }
          .accept:hover{
            background:green;
          }
          .reject:hover{
            background:red;
          }
        }
      }
    }
  }
`;
