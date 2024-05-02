import React from 'react'

export default function Card ({ children, bg = 'bg-gray-100' }) {
  return (
    /* Can use a template literal to pass in dynamic background colours */
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )
}
