import React from 'react'

export default function Player({ name, email }) {
  return (
    <div style={{ width: '200px', height: '200px', margin: '10px', padding: '10px' }}>
      <h3>{name}</h3>
      <h6>{email}</h6>
    </div>
  )
}
