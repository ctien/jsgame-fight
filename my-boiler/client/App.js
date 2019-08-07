/**
 * Root Component
 */
import React from 'react'
import { Provider } from 'react-redux'

// Base stylesheet
import './main.css'

export default function App(props){
    return(
        <Provider store={props.store}></Provider>
    )
}