import React from 'react'

const Header = ({ countersLength }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div>logo</div>
      <div>
        <span>{countersLength}</span>
      </div>
    </div>
  )
}

export default Header
