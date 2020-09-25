import React from 'react'
import logo from '../../images/logo.jpg'

var style = {
  height: '50px',
  width: ' 50px',
  margin: '10px',
  position: 'relative',
  top: '-11px'
}

const Logo = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '0'
      }}
    >
      <img style={style} src={logo} alt="tt" />
      <div style={{ display: 'inline-block' }}>
        <h1>AIRLINE</h1>
      </div>
    </div>
  )
}

export default Logo
