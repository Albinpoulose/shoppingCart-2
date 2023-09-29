import React from 'react'

function ReturnIcon() {
  return (
    <div>
         <svg
      fill="none"
      stroke="#5C5857"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="8em"
      width="8em"
      // {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 17 A2 2 0 0 1 7 19 A2 2 0 0 1 5 17 A2 2 0 0 1 9 17 z" />
      <path d="M19 17 A2 2 0 0 1 17 19 A2 2 0 0 1 15 17 A2 2 0 0 1 19 17 z" />
      <path d="M5 17H3V6a1 1 0 011-1h9v6H8l2 2m0-4l-2 2M9 17h6M13 6h5l3 5v6h-2" />
    </svg>
    </div>
  )
}

export default ReturnIcon