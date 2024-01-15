import React from 'react'

const Wrapper = ({element : Element , color}) => {
  return (
    <div>
        <Element color={color}> </Element>
    </div>
  )
}

export default Wrapper