import { AUTO_LANGUAGE } from '../constants';
import { type State, type Action, type Language, type FromLanguage } from '../types';
import { useReducer } from 'react'

// 1. Create the initial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2. Create the reducer
export function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LENGUAGES') {
    if( state.fromLanguage === AUTO_LANGUAGE ) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LENGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LENGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

export function useStore() {
  // 3. use the hook reducer
  const [{ 
    fromLanguage, 
    toLanguage, 
    fromText, 
    result, 
    loading 
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LENGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LENGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LENGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}