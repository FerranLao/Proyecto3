import React from "react";
import { connect } from "react-redux";
import { SocialApi } from "../lib/SocialApi";
import { Friend } from "../components/Friend";
import { StyledFriends } from "../lib/styledcomps/styledFriends";
import { UserBigCard } from "../components/UserBigCard";

class _Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friendlist: null,
      selected:null
    };
  }

  componentDidMount() {
    SocialApi.getfriends().then(({ data }) => {
        console.log(data)
      this.setState({ friendlist: data ,selected:data[0]});
    });
  }

  render() {
    const { friendlist,selected } = this.state;
    return (
      <StyledFriends>
        <div className="friends">
          {friendlist ? friendlist.map(e => 
            <Friend key={e.username} user={e} />
          ):null}
        </div>
        <div>
            {selected ? <UserBigCard user={selected}></UserBigCard>:null}
        </div>
      </StyledFriends>
    );
  }
}

export const Friends = connect(state => ({ user: state.user }))(_Friends);
