import React from 'react'
import { ArrowSvg } from './icon'
function RedBtn({children, ...props}) {
  const { className = '', ...rest } = props;
  return (
    <button className={`button-filled ${className}`.trim()} {...rest}>
      <span>{children}</span> <ArrowSvg />
    </button>
  )
}

export default RedBtn