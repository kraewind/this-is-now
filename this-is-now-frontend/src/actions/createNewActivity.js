// import React, { Component } from 'react';
import React from 'react'
import  { Redirect } from 'react-router-dom'
import {addActivity, getReadyToAddActivity} from "./index"
// import { loginUser } from "./users";


export function createNewActivityPost(name, description, valuesAndScoresObject, jwt) {
    return (dispatch) => {
      dispatch(getReadyToAddActivity());
      fetch('http://localhost:3000/activities/new', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({activity: {name, description, valuesAndScoresObject}})
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(addActivity(data.jwt, data.user))
          // return callBack
        });

    };
  }


 
