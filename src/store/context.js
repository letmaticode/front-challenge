import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { reducer, reducerPersist } from './Reducer'

//
// NO PERSISTION
//
const initialState = {};
const StateContext = createContext(initialState);

const noPersist = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action);
    return newState;
  }
}

const Context = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(noPersist(reducer), initialState)}>
      {children}
    </StateContext.Provider>
  )
}
Context.defaultProps = {
  children: null
}
Context.propTypes = {
  children: PropTypes.element
}

const useStore = () => useContext(StateContext);

//
// PERSISTION
//
const initialStatePersist = {};
const StateContextPersist = createContext(initialStatePersist);

const persist = (reducer) => {
  return (state, action) => {
    const newState = reducerPersist(state, action);
    localStorage.setItem('react-store', JSON.stringify(newState));
    return newState;
  }
}

const ContextPersist = ({ children }) => {
  const cache = localStorage.getItem('react-store');
  const initialState = cache ? JSON.parse(cache) : initialStatePersist;
  return (
    <StateContextPersist.Provider value={useReducer(persist(reducer), initialState)}>
      {children}
    </StateContextPersist.Provider>
  )
}
ContextPersist.defaultProps = {
  children: null
}
ContextPersist.propTypes = {
  children: PropTypes.element
}

const useStorePersist = () => useContext(StateContextPersist);

export {
  Context, useStore,
  ContextPersist, useStorePersist
}
