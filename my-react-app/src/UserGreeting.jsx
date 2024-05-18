import propTypes from 'prop-types';

function UserGreeting(props)
{
    const welcomeMessage = <h2 className='welcome-message'>Hello and welcome {props.username}!!</h2> 
    
    const loginPrompt = <h2 className='retry'>Access Denied, Retry {props.username}!!</h2>

    return( props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    username: propTypes.string,
    isLoggedIn: propTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false
}

export default UserGreeting;