import styled from "@emotion/styled";

export const StyledEventCard = styled.div`
  display: flex;
  height: 90vh;
  .card {
    width: 50%;
    color: lightgrey;
    background: none;
    card-image {
      height: 37vh;
    }
  }
  .eventform {
    height: 95%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .time{
    display:flex;
    justify-content: space-around;
    div{
      width: 95%;
    }
  }
  
  .eventdata {
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content {
    padding-top: 10px;
    height: 19vh;
  }
  .slideThree {
    width: 120px;
    height: 26px;
    background: #333;
    margin: 20px auto;
    position: relative;
    border-radius: 50px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
      0px 1px 0px rgba(255, 255, 255, 0.2);
    &:after {
      content: "Public";
      color: #000;
      position: absolute;
      right: 10px;
      z-index: 0;
      font: 12px/26px Arial, sans-serif;
      font-weight: bold;
      text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);
    }
    &:before {
      content: "Private";
      color: $activeColor;
      position: absolute;
      left: 10px;
      z-index: 0;
      font: 12px/26px Arial, sans-serif;
      font-weight: bold;
    }
    label {
      display: block;
      width: 60px;
      height: 20px;
      cursor: pointer;
      position: absolute;
      top: 3px;
      left: 3px;
      z-index: 1;
      background: #fcfff4;
      background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
      border-radius: 50px;
      transition: all 0.4s ease;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    }
    input[type="checkbox"] {
      visibility: hidden;
      &:checked + label {
        left: 43px;
      }
    }
  }
`;
