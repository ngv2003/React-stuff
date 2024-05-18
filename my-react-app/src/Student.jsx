function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Married: {props.isMarried ? "Yes" :"No"}</p>

        </div>
    );
}

export default Student;