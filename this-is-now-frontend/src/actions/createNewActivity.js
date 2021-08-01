// import React, { Component } from 'react';
import React from 'react'
import  { Redirect } from 'react-router-dom'
import {addActivity, getReadyToAddActivity} from "./index"
// import { loginUser } from "./users";


export function createNewActivityPost(name, description, valuesAndScoresArray, jwt) {
  // debugger
    return (dispatch) => {
      dispatch(getReadyToAddActivity());
      fetch('http://localhost:3000/activities', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({activity: {name, description, valuesAndScoresArray, jwt}})
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(addActivity(jwt, data.user.data))
          // return callBack
        });

    };
  }


 

