import React from "react"

const Button = (props) => {
  return (
    <div>
      <button disabled={props.disabled === true ? "disabled" : ""} className="mt-8 transition bg-primaryBlue-600 text-white text-underline-none font-bold px-2 py-2 btn-inline mx-auto w-1/3 mt-6 mb-2 rounded md:px-3 md:py-3 hover:bg-gray-800 md:w-1/6" onClick={props.onClick}>
        {typeof props.btnText !== "undefined" && props.btnText !== "" ? props.btnText : "button"}
      </button>
    </div>
  )
}

export default Button
