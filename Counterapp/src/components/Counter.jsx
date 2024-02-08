import { useState } from 'react';
import './Counter'


const Counter = ()=>
{
    const[count, setCount] = useState(0);

    const increaseCount = ()=>
    {
        setCount(count+1)
    }
    const decreaseCount = ()=>
    {
        setCount(count-1);
    }
    const resetCount = ()=>
    {
        setCount(0)
    }
    return(
        <>
        <div className="maincontainer">
            <h3>Count: {count}</h3>
            <div className="buttons">
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>    
        </>
    )
}



export {Counter};