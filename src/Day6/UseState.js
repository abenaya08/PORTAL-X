import React ,{useState} from 'react';
export default function UseState()
{
    const[student,setStudent]=useState("abe")
    return(
        <div> <h1>{student}</h1></div>
    )
}