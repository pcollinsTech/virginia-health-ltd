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

export default (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: action.payload,
      }
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          ingredient => ingredient.title !== action.payload.title
        ),
      }
    case ADD_USP:
      return {
        ...state,
        usps: action.payload,
      }
    case REMOVE_USP:
      return {
        ...state,
        usps: state.usps.filter(usp => usp.title !== action.payload.title),
      }
    case ADD_SHAPE:
      return {
        ...state,
        shapes: action.payload,
      }
    case REMOVE_SHAPE:
      return {
        ...state,
        shapes: state.shapes.filter(
          shape => shape.title !== action.payload.title
        ),
      }
    case ADD_TEXTURE:
      return {
        ...state,
        textures: action.payload,
      }
    case REMOVE_TEXTURE:
      return {
        ...state,
        textures: state.textures.filter(
          texture => texture.title !== action.payload.title
        ),
      }
    case ADD_PACKAGING:
      return {
        ...state,
        packagings: action.payload,
      }
    case REMOVE_PACKAGING:
      return {
        ...state,
        packagings: state.packagings.filter(
          packaging => packaging.title !== action.payload.title
        ),
      }

    default:
      return state
  }
}
