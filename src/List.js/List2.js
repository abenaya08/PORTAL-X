import React from 'react'
export default function List()
{
    const disp=[{id:1,name:"Abenaya ",college:"SKCET"},{id:2,name:"Ashira ",college:"SKCET"}]
    const show=disp.map((item)=> <li key={item.id}>
        {item.name}
        {item.college}
    </li>)
    return(
        <div><h1>{show}</h1></div>
    )
}