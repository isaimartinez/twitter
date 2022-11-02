import React from 'react'

const Button = ({text,onClick, bgColor, textStyle, h, rounded}) => {
  return (
    <button className={`flex w-full h-${h} rounded-2xl justify-center items-center`} 
      style={{backgroundColor: bgColor}}
      onClick={onClick}
      type="button"
    >
      <p className={textStyle}>{text}</p>
    </button>
  )
}

export default Button