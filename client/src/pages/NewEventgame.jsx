import React from "react"
import { GameCard } from "../components/GameCard";


export class NewEventgame extends React.Component{
    constructor(){
        super()
        this.state={game:{}}
    }

    componentDidMount(){

    }

    render(){
        console.log(window.location)
        const {game} = this.state
        return(
            <GameCard game={game} create></GameCard>
        )
    }
}