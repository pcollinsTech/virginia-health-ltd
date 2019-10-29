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
    ingredients: [{}],
    usps: [{}],
    packagings: [{}],
    shapes: [{}],
    textures: [{}],
  }

  const [state, dispatch] = useReducer(EnquiryReducer, inititalState)

  const addIngredient = ingredient => {
    console.log("Adding Ingredient", ingredient)
    dispatch({
      type: ADD_INGREDIENT,
      payload: ingredient,
    })
  }

  const removeIngredient = ingredient => {
    console.log("Removing Ingredient", ingredient)
    dispatch({
      type: REMOVE_INGREDIENT,
      payload: ingredient,
    })
    console.log("INGRDIENTS dispatch", state.ingredients)
  }

  const addUsp = usp => {
    console.log("Adding usp", usp)
    dispatch({
      type: ADD_USP,
      payload: usp,
    })
  }

  const removeUsp = usp => {
    console.log("Removing usp", usp)
    dispatch({
      type: REMOVE_USP,
      payload: usp,
    })
  }

  const addShape = shape => {
    console.log("Adding shape", shape)
    dispatch({
      type: ADD_SHAPE,
      payload: shape,
    })
  }

  const removeShape = shape => {
    console.log("Removing shape", shape)
    dispatch({
      type: REMOVE_SHAPE,
      payload: shape,
    })
  }

  const addPackaging = packaging => {
    console.log("Adding packaging", packaging)
    dispatch({
      type: ADD_PACKAGING,
      payload: packaging,
    })
  }

  const removePackaging = packaging => {
    console.log("Removing packaging", packaging)
    dispatch({
      type: REMOVE_PACKAGING,
      payload: packaging,
    })
  }
  const addTexture = texture => {
    console.log("Adding texture", texture)
    dispatch({
      type: ADD_TEXTURE,
      payload: texture,
    })
  }

  const removeTexture = texture => {
    console.log("Removing texture", texture)
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
