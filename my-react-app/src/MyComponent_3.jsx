import React,{useState} from 'react';
function MyComponent_3(){
    const [student,setStudent] = useState(["nimai","harshad","viswa"]);

    function handleStudentAdd(){
        const newStudent = document.getElementById("studentinput").value;
        document.getElementById("studentinput").value="";

        setStudent(s=> [...s,newStudent]);
    }
    function handleStudentRemove(index){
        setStudent(student.filter((_,i) => i!== index));
    
    }
    return(
        <div>
            <h2>Members in project</h2>
            <ol>
                {student.map((student,index) =><li key={index} onClick={() => handleStudentRemove(index)}>{student}</li>)}
            </ol>
            <input type="text" id="studentinput" placeholder='Enter student name'/>
            <button onClick={handleStudentAdd}>Add Student</button>
        </div>
    );
}

export default MyComponent_3;