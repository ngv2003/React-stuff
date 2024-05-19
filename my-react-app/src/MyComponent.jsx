import PropTypes from 'prop-types';
import React,{useState} from 'react';
function MyComponent(props){

    const [goal,setGoal] = useState(0);

    const updateGoal = () => {
        setGoal(goal+1);

    }
    return(
        <div>
            <p>{props.name} scores: {goal}</p>
            <button onClick={updateGoal}>{props.celebration}</button>
        </div>
    );
}
MyComponent.propTypes={
    name: PropTypes.string,
    celebration: PropTypes.string,
}   

export default MyComponent;