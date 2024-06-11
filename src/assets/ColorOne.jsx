import React from 'react'


export default function ColorOne({colors,ramesh}) {
  return (
    <div onClick={ramesh}  style={{
        backgroundColor:colors,
        height:"200px",
        width:'200px',
        border:'solid 1px yellow'

        }}>babu
    </div>
  )
}
