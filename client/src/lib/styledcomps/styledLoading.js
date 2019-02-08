import styled from "@emotion/styled";

export const StyledLoading = styled.div`
  .loader-container {
    position: relative;
    margin: 0;
    margin-top: 30vh;
    height: 100%;
    width: 100%;
  }
  .load1 {
    opacity: 1;
    fill-opacity: 1;
    stroke: none;
    stroke-width: 0.99999994;
    stroke-linecap: round;
    stroke-linejoin: bevel;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }

  .structure,
  .smoke {
    position: absolute;
    z-index: 800;
    top: calc(50% - 65px);
    left: calc(50% - 100px);
    width: 200px;
    height: 130px;
  }

  .smoke {
    z-index: 999;
  }

  .structure {
    transform: translate3d(0, 0, 0);
    perspective: 1000px;
    animation: shake 0.42s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
  }

  .text-container {
    position: absolute;
    top: calc(50% + 100px);
    left: calc(50% - 100px);
    width: 200px;
  }
  .text-container h2 {
    width: 100%;
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
  }

  #rocket-svg {
    margin-left: -60px;
    position: absolute;
    top: -20px;
    transform: rotate(90deg);
  }

  #right-wing,
  #left-wing,
  #nose,
  #window-stroke,
  #middle-wing {
    fill: #f44336;
  }

  #rocket-main-part {
    fill: #ffd700;
  }

  #window-inner {
    fill: #212526;
  }

  .smoke span {
    position: absolute;
    width: 50px;
    border-bottom: 2px solid #fff;
  }

  .meteors-container {
    z-index: 998;
    width: 100%;
    height: 100%;
  }

  .meteors-container span {
    width: 75px;
    border-bottom: 2px solid #fff;
  }

  .smoke span:nth-of-type(1) {
    top: 28px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-0 ease-out 0.4s infinite;
  }

  @keyframes smokeAnim-0 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -85px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(2) {
    top: 36px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-1 ease-out 0.4s infinite;
  }

  @keyframes smokeAnim-1 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -125px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(3) {
    top: 44px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-2 ease-out 0.45s infinite;
  }

  @keyframes smokeAnim-2 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -189px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(4) {
    top: 52px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-3 ease-out 0.45s infinite;
  }

  @keyframes smokeAnim-3 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -56px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(5) {
    top: 130px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-4 ease-out 0.3s infinite;
  }

  @keyframes smokeAnim-4 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -95px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(6) {
    top: 140px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-5 ease-out 0.3s infinite;
  }

  @keyframes smokeAnim-5 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -138px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(7) {
    top: 76px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-6 ease-out 0.6s infinite;
  }

  @keyframes smokeAnim-6 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -116px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(8) {
    top: 120px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-7 ease-out 0.55s infinite;
  }

  @keyframes smokeAnim-7 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -96px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(9) {
    top: 200px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-8 ease-out 0.65s infinite;
  }

  @keyframes smokeAnim-8 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -182px;
      opacity: 0;
    }
  }
  .smoke span:nth-of-type(10) {
    top: 100px;
    left: -50px;
    box-shadow: 0px 0px 5px #fff;
    animation: smokeAnim-9 ease-out 0.5s infinite;
  }

  @keyframes smokeAnim-9 {
    from {
      left: -50px;
      opacity: 1;
    }
    to {
      left: -156px;
      opacity: 0;
    }
  }
  .meteors-container span:nth-of-type(1) {
    top: 16.6666666667%;
    left: 100%;
    box-shadow: 0px 0px 5px #fff;
    animation: meterosAnim-0 linear 0.6s infinite;
  }

  @keyframes meterosAnim-0 {
    0% {
      left: 100%;
    }
    75% {
      left: calc(0% - 75px);
    }
    100% {
      left: calc(0% - 75px);
    }
  }
  .meteors-container span:nth-of-type(2) {
    top: 33.3333333333%;
    left: 100%;
    box-shadow: 0px 0px 5px #fff;
    animation: meterosAnim-1 linear 0.7s infinite;
  }

  @keyframes meterosAnim-1 {
    0% {
      left: 100%;
    }
    75% {
      left: calc(0% - 75px);
    }
    100% {
      left: calc(0% - 75px);
    }
  }
  .meteors-container span:nth-of-type(3) {
    top: 50%;
    left: 100%;
    box-shadow: 0px 0px 5px #fff;
    animation: meterosAnim-2 linear 0.45s infinite;
  }

  @keyframes meterosAnim-2 {
    0% {
      left: 100%;
    }
    75% {
      left: calc(0% - 75px);
    }
    100% {
      left: calc(0% - 75px);
    }
  }
  .meteors-container span:nth-of-type(4) {
    top: 66.6666666667%;
    left: 100%;
    box-shadow: 0px 0px 5px #fff;
    animation: meterosAnim-3 linear 0.7s infinite;
  }

  @keyframes meterosAnim-3 {
    0% {
      left: 100%;
    }
    75% {
      left: calc(0% - 75px);
    }
    100% {
      left: calc(0% - 75px);
    }
  }
  .meteors-container span:nth-of-type(5) {
    top: 83.3333333333%;
    left: 100%;
    box-shadow: 0px 0px 5px #fff;
    animation: meterosAnim-4 linear 0.7s infinite;
  }

  @keyframes meterosAnim-4 {
    0% {
      left: 100%;
    }
    75% {
      left: calc(0% - 75px);
    }
    100% {
      left: calc(0% - 75px);
    }
  }
  .meteors-container span:nth-of-type(6) {
    top: 100%;
    left: 100%;
    box-shadow: 0px 0px 5px #fff;
    animation: meterosAnim-5 linear 0.7s infinite;
  }

  @keyframes meterosAnim-5 {
    0% {
      left: 100%;
    }
    75% {
      left: calc(0% - 75px);
    }
    100% {
      left: calc(0% - 75px);
    }
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 1px, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 2px, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-2px, -2px, 0);
    }
    40%,
    60% {
      transform: translate3d(2px, 2px, 0);
    }
  }
`;
