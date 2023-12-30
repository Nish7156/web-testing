import React from 'react'

function Card({children}:any) {
  return (
    <div className='p-2 bg-secondary-200 text-white rounded-md'>
        {children}
    </div>
  )
}

export default Card