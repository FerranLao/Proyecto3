import styled from "@emotion/styled";

export const StyledChat = styled.div`
  body {
    background: #35363d;
  }

  .chatter {
    border-radius: 20px;
    position: fixed;
    right: 40px;
    bottom: 50px;
    z-index: 1000;
    margin: 0;
    padding: 12px 12px 16px 12px;
    width: 20%;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    outline: 3px solid rgba(0, 0, 0, 0.05);
    background: #c0392b;
  }

  .chatter .chatter_pre_signup {
    display: none;
  }

  .chatter .chatter_post_signup {
    display: block;
  }

  .chatter.chatter_signed_up .chatter_post_signup {
    display: block;
  }

  .chatter .chatter_field {
    position: relative;
    margin: 0 0 8px 0;
    padding: 11px 12px 9px 12px;
    width: 276px;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: 200;
    color: #4b4b4b;
    -webkit-font-smoothing: antialiased;

    border: none;
    outline: none;
    background: #ffffff;
  }

  .chatter .chatter_field.chatter_message {
    margin: 0;
    padding: 11px 12px 9px 12px;
    font-size: 14px;
    line-height: 20px;
    height: 22px;
    resize: none;
  }

  .chatter .chatter_convo {
    position: relative;
    margin: 0 -6px 12px -6px;
    padding: 0 6px;
    height: 366px;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    overflow-y: auto;
  }

  .chatter .chatter_convo .chatter_msg_item {
    position: relative;
    margin: 5px 0 8px 0;
    padding: 8px 10px;
    max-width: 60%;
    display: block;
    background: rgba(255, 255, 255, 0.26);
  }

  .chatter .chatter_convo .chatter_msg_item .chatter_avatar {
    position: absolute;
    top: 0;
  }

  .chatter
    .chatter_convo
    .chatter_msg_item.chatter_msg_item_admin
    .chatter_avatar {
    left: -52px;
  }

  .chatter
    .chatter_convo
    .chatter_msg_item.chatter_msg_item_user
    .chatter_avatar {
    right: -52px;
  }

  .chatter .chatter_convo .chatter_msg_item .chatter_avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .chatter .chatter_convo .chatter_msg_item.chatter_msg_item_admin {
    margin-left: 52px;
    float: left;
  }

  .chatter .chatter_convo .chatter_msg_item.chatter_msg_item_user {
    margin-right: 52px;
    float: right;
    background: rgba(255, 255, 255, 0.16);
  }

  .chatter .chatter_convo .chatter_msg_item.chatter_msg_item_admin:before {
    content: "";
    position: absolute;
    top: 15px;
    left: -12px;
    z-index: 10;
    border: 6px solid transparent;
    border-right-color: rgba(255, 255, 255, 0.26);
  }

  .chatter_msg_item.chatter_msg_item_user:before {
    content: "";
    position: absolute;
    top: 15px;
    right: -12px;
    z-index: 10;
    border: 6px solid transparent;
    border-left-color: rgba(255, 255, 255, 0.16);
  }

  .chatter .chatter_convo .chatter_msg_item strong.chatter_name {
    padding: 0 1px 1px 0;
    font-weight: 900;
    display: block;
  }

  .chatter .chatter_btn {
    position: relative;
    margin: 0;
    padding: 0 12px;
    height: 42px;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 12px;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;

    color: #ffffff;
    color: rgba(255, 255, 255, 0.85);
    border: none;
    outline: none;
    background: rgba(255, 124, 124, 0.8);
  }

  .chatter .chatter_btn:hover {
    color: rgba(255, 255, 255, 1);
    background: rgba(255, 124, 124, 0.96);
  }

  .chatter .chatter_btn:active {
    color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 124, 124, 0.7);
  }

  .chatter .chatter_btn.chatter_create_user {
    width: 300px;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb {
    margin: 2px;
    border-radius: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .pen_data {
    position: fixed;
    top: 10px;
    left: 10px;
    padding: 8px 12px;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 100;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    background: #2c3e50;
  }

  .pen_data a,
  .pen_data a:visited {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    border-bottom: 1px dotted #999999;
  }

  .pen_data a:hover {
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px dotted #cccccc;
  }
`;
