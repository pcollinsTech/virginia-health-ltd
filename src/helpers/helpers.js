import React from "react"
import { FaCheckCircle } from "react-icons/fa"

const containsObject = (obj, list) => {
  var i
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true
    }
  }

  return false
}

const tick = (obj, list) => (containsObject(obj, list) ? <FaCheckCircle /> : "")

export { containsObject, tick }
