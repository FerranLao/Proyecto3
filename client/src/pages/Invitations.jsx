import React from "react"
import { connect } from "react-redux";


class _Invitations extends React.Component{

    constructor(){
        super()
        this.state={

        }
    }




    render(){
        return(<p>

        </p>)
    }
}

export const Invitations = connect(state=>({user:state.user}))(_Invitations)