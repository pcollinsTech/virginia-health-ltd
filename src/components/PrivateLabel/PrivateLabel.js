import React from "react"
import { Link } from "gatsby"
import qualityAndSustainability from "../../assets/images/qualityAndSustainability.png"

const QualityAndSustainability = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="col-sm-7">
        <img src={qualityAndSustainability} alt="" />
      </div>
      <div className="col-sm-5 pt-5">
        <h2>Private Label</h2>
        <p>
          When it comes to food, Helen and her team use top quality, nutrient
          dense wholesome ingredients, so you won’t find any synthetic
          stabilizers, preservatives or flavourings in any products at Virginia
          Health Food Ltd.
        </p>
        <p>
          In response to the need for easy to use, nutritionally valuable foods
          which do not contain wheat (an ingredient that is strongly linked to
          digestive intolerance), Virginia Health Food Ltd has developed a range
          of products from delicious, fuss free wheat free and gluten free home
          baking mixes through to nutritious breakfast seed toppings to boost
          your breakfast.
        </p>
        <button className="btn btn-primary">
          <Link to="">Read More</Link>
        </button>
      </div>
    </div>
  )
}

export default QualityAndSustainability
