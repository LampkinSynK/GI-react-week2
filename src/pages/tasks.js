import React from 'react'

export default function Tasks(props) {
  return (
    <div className='taskCard'>
        <input type='checkbox'></input>
        <input type="text" placeholder='Enter Task'></input>
        <button onClick={props.handleRemove}>x</button>
    </div>
  )
}