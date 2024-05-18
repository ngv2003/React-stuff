function Food(){
    const food1 = "Burgers";
    const food2 = "French fries";


    return(
        <ul>
            <li>Coffee</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>

    );
}

export default Food