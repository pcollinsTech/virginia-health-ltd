import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../types"

export default (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.push(action.payload),
      }
    case REMOVE_INGREDIENT:
      console.log(action.payload.id)
      return {
        ...state,
        ingredients: state.ingredients.filter(
          ingredient => ingredient.id !== action.payload.id
        ),
      }

    default:
      return state
  }
}
