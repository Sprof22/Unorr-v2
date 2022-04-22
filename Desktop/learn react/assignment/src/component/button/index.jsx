import React from 'react'
import "./button.css"
export default function Button({variant, size, rounded}) {
  return (
    <button className={rounded?`rounded ${variant} ${size}`:`${variant} ${size}`}>
      Button
    </button>
  )
}
