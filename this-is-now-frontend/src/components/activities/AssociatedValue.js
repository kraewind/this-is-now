import React, { Component } from 'react';
// import  { Redirect } from 'react-router-dom'

import {connect} from "react-redux"
// import { createNewActivityPost } from "../../actions/createNewActivity";
// import {loginUser} from '../actions/loginUser'



class AssociatedValue extends Component {

    state = {
        name: '',
        score: 1
    }

    handleOnAddNewAssociatedValue = (e) => {
       //calback to add another one DJ KHALID
    }

    handleOnNameChange = (e) => {
        this.setState({
            name: e.target.value,
            score: this.state.score
        })
    }


    handleOnValueScoreChange = (e) => {
        this.setState({
            name: this.state.name,
            score: e.target.value
        })
    }
    makeOptionForEveryValue = () => {
        // debugger
        //DONT LET CHOSEN VALUES COME UP IN NEXT LIST
        const nonUniqueList = this.props.all_values.map(value => {
            return <option id={value.id} value={value.id}>{value.name}</option>
        })
        const uniqueList = [...new Set(nonUniqueList)]
        return uniqueList
    }


    render() {
    
    return(
        <div className="container">
            <label for="values">Add a Value</label>

            <select onChange={(e) => this.handleOnNameChange(e)} name="values" id="values">
                {this.makeOptionForEveryValue()}
            </select>


            <label for="scores">Assign a score </label>

            <select onChange={(e) => this.handleOnValueScoreChange(e)} name="scores" id="scores">
                {/* <option value="null">1-10</option> */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button  onClick={(e) => this.handleOnAddNewAssociatedValue(e)}>ADD ANOTHER VALUE</button>

        </div>
    )
    
    }
}

export default AssociatedValue