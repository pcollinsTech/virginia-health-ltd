import React, { useReducer } from "react"
// import axios from "axios"
import EnquiryContext from "./enquiryContext"
import EnquiryReducer from "./EnquiryReducer"
import {
  ADD_INGREDIENT,
  ADD_USP,
  ADD_PACKAGING,
  ADD_TEXTURE,
  ADD_SHAPE,
  REMOVE_INGREDIENT,
  REMOVE_USP,
  REMOVE_PACKAGING,
  REMOVE_TEXTURE,
  REMOVE_SHAPE,
} from "../types"

const EnquiryState = props => {
  const inititalState = {
    ingredients: [],
    usps: [],
    packagings: [],
    shapes: [],
    textures: [],
  }

  const [state, dispatch] = useReducer(EnquiryReducer, inititalState)

  const addIngredient = ingredient => {
    let newIngredients = [...state.ingredients, ingredient]
    dispatch({
      type: ADD_INGREDIENT,
      payload: newIngredients,
    })
  }

  const removeIngredient = ingredient => {
    dispatch({
      type: REMOVE_INGREDIENT,
      payload: ingredient,
    })
  }

  const addUsp = usp => {
    let newUsps = [...state.usps, usp]
    dispatch({
      type: ADD_INGREDIENT,
      payload: newUsps,
    })
  }

  const removeUsp = usp => {
    dispatch({
      type: REMOVE_USP,
      payload: usp,
    })
  }

  const addShape = shape => {
    let newShapes = [...state.shapes, shape]
    dispatch({
      type: ADD_SHAPE,
      payload: newShapes,
    })
  }

  const removeShape = shape => {
    dispatch({
      type: REMOVE_SHAPE,
      payload: shape,
    })
  }

  const addPackaging = packaging => {
    let newPackagings = [...state.packagings, packaging]
    dispatch({
      type: ADD_PACKAGING,
      payload: newPackagings,
    })
  }

  const removePackaging = packaging => {
    dispatch({
      type: REMOVE_PACKAGING,
      payload: packaging,
    })
  }
  const addTexture = texture => {
    let newTextures = [...state.textures, texture]
    dispatch({
      type: ADD_TEXTURE,
      payload: newTextures,
    })
  }

  const removeTexture = texture => {
    dispatch({
      type: REMOVE_TEXTURE,
      payload: texture,
    })
  }
  return (
    <EnquiryContext.Provider
      value={{
        ingredients: state.ingredients,
        usps: state.usps,
        packagings: state.packagings,
        shapes: state.shapes,
        textures: state.textures,
        removeIngredient,
        addIngredient,
        addUsp,
        removeUsp,
        addShape,
        removeShape,
        addPackaging,
        removePackaging,
        addTexture,
        removeTexture,
      }}
    >
      {props.children}
    </EnquiryContext.Provider>
  )
}

export default EnquiryState
