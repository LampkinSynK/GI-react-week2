import React from 'react'
import { useState } from 'react'


export default function Counter() {
    const [counter, setCounter] = useState(0);

    const add = () => {
        let screenCounter = document.getElementById('counter')
        let number = Number(screenCounter.textContent)

        number+=1;

        setCounter(number)
        screenCounter.textContent = counter;
    }
    const minus = () => {
        const screenCounter = document.getElementById('counter')
        let number = Number(screenCounter.textContent)

        number-=1;

        setCounter(number)
        screenCounter.textContent = counter;
    }
  return (
    <div>
        <div id='counter'>0</div>
        <button id='add' onClick={add}>+</button>
        <button id='minus' onClick={minus}>-</button>
      
    </div>
  )
}


