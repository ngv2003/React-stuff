
function Button(){ 
    let count=0;
    const handleClick = (player) => {
        console.log(`${player} scores ${++count}`)};
    return(   
        <button onClick={() =>handleClick("ronaldo")}>Click me 😀</button>
    );
}   


export default Button;