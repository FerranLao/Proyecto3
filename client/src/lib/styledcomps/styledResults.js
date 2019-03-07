import styled from "@emotion/styled";

export const StyledResults = styled.div`
  height: 68vh;
  overflow-y: scroll;
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800");

  font-family: "Montserrat", helvetica, arial, sans-serif;

  * {
    transition: 0.4s;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: 0;
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }

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

  .movie-card {
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 800px;
    height: 100%;
    min-height: 200px;
    display: block;
    margin: 8vh auto;
    border-radius: 8px;
    box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);
    position: relative;
  }
  @media screen and (max-width: 800px) {
    .movie-card {
      width: 95%;
      max-width: 95%;
    }
  }
  @media screen and (max-width: 600px) {
    .movie-card {
      background-position: 50% 0%;
      background-size: cover;
      height: 400px;
    }
  }

  ${props =>
    props.image.map(
      (e, i) => `.index${i}{
    background-image: url(${e})
  }`
    )}

  .movie-card__overlay {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(
      to right,
      rgba(42, 159, 255, 0.2) 0%,
      #212120 60%,
      #212120 100%
    );
    background-blend-mode: multiply;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  @media screen and (max-width: 600px) {
    .movie-card__overlay {
      background: linear-gradient(
        to bottom,
        rgba(42, 159, 255, 0.2) 0%,
        #212120 60%,
        #212120 100%
      );
    }
  }
  .movie-card__share {
    padding: 1em;
    display: inline-block;
    width: 100%;
    max-width: 130px;
  }
  @media screen and (max-width: 600px) {
    .movie-card__share {
      display: block;
      width: 100%;
    }
  }
  .movie-card__icon {
    color: #ffffff;
    mix-blend-mode: lighten;
    opacity: 0.4;
    background: none;
    padding: 0;
  }
  .movie-card__icon:hover {
    opacity: 1;
    mix-blend-mode: lighten;
  }
  .movie-card__icon:not(:first-of-type) {
    margin-left: 5px;
  }
  .movie-card__icon i {
    font-size: 1.2em;
  }
  .movie-card__content {
    width: 100%;
    max-width: 370px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    float: right;
    padding-right: 1em;
    padding-bottom: 1em;
  }
  @media screen and (max-width: 1000px) {
    .movie-card__content {
      width: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    .movie-card__content {
      margin-top: 4.2em;
      width: 100%;
      float: inherit;
      max-width: 100%;
      padding: 0 1em 1em;
    }
  }
  .movie-card__header {
    margin-bottom: 2em;
  }
  .event-card{
    margin-top:-2em
  }
  .movie-card__title {
    color: #ffffff;
    margin-bottom: 0.25em;
    opacity: 0.75;
    height: 70px;
    overflow: hidden;
  }
  .movie-card__info {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8em;
    color: #2a9fff;
    line-height: 1;
    margin: 0;
    font-weight: 700;
    opacity: 0.5;
  }
  .movie-card__desc {
    font-weight: 300;
    opacity: 0.84;
    margin-bottom: 2em;
  }

  h1,
  h2,
  h3 {
    font-family: "Montserrat", helvetica, arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1;
    font-weight: 400;
  }

  .btn {
    padding: 0.5rem 2rem;
    background-color: rgba(255, 255, 255, 0.4);
    color: white;
  }

  .btn-outline {
    background-color: transparent;
    border: 3px solid #ffffff;
  }

  .btn::before {
    vertical-align: middle;
    font-size: 1.5em;
    padding-right: 0.5em;
  }

  .btn-outline:hover {
    border-color: #2a9fff;
    color: #2a9fff;
    box-shadow: 0px 1px 8px 0px rgba(245, 199, 0, 0.2);
  }
`;
