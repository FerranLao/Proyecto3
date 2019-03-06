import styled from "@emotion/styled";

export const StyledUserBigCard = styled.div`
  body {
    background: #4B4B46;
  }

  .card {
   
    width: 100%;
    display: flex;
    position: relative;
    background-color: #4B4B46;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.25s;
    text-decoration: none;
    color: #888;
  }

  .image {

    
  }

  .image > img {
    margin:0 auto;
    width: 250px;
    height: 250px;
    border-radius:15px;
  }

  .image > h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5%;
    margin: 0;
    font-size: 24px;

    color: #fff;
    background-image: linear-gradient(to top,#4B4B46, rgba(0, 0, 0, 0));
  }

  .info {
    padding: 5%;
  }

  .info > .tags {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
 

  

  .info > .desc {
    font-size: 16px;
  }


`;
