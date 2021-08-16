// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {removeValueFromCurrentUser, getReadyToRemoveValueFromCurrentUsersValues} from "./index"
// import { loginUser } from "./users";


export function removeValueFromCurrentUsersValues(value, CUID, jwt) {
  
    return (dispatch) => {
      dispatch(getReadyToRemoveValueFromCurrentUsersValues());
      fetch(`http://localhost:3000/users/${CUID}`, {
        method: 'PATCH',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {value}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
          
          const array = JSON.parse(sessionStorage.getItem('value_ids'))
          
          if (array){
            const array2 = array.filter(id => id !== data)
            sessionStorage.setItem('value_ids', JSON.stringify(array2))
            
            dispatch(removeValueFromCurrentUser(data))
          }
          // get back nothing but if succesful add value to user
          // return callBack
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }