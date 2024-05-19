import React,{useState} from 'react';
function Counter(){
    const [count,setCount] = useState(0);

    const Increment = () => {
        setCount(count+1);
    }
    const Decrement = () => {
        setCount(count-1);
    }
    const Reset = () => {
        setCount(0);
    } 
    return(
        <>
        <div className='counter'>
            <p className='count-display'>Count: {count}</p>
                <button className="count-button"onClick={() => Increment()}>Increment</button>

                <button onClick={()  =>Reset()}>Reset</button>

                <button onClick={() => Decrement()}>Decrement</button>
        </div>
        </>
    );
}

export default Counter;