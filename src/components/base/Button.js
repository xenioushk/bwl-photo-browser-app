import React from "react"

const Button = (props) => {
  return (
    <div>
      <button disabled={props.disabled === true ? "disabled" : ""} className="transition bg-primaryBlue-600 text-white text-underline-none font-bold px-4 py-4 rounded hover:bg-gray-800 btn-inline p-3 mx-auto w-1/2 md:w-1/4" onClick={props.onClick}>
        {props.btnText}
      </button>
    </div>
  )
}

export default Button
