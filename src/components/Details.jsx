import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Details() {
    const {id} = useParams();
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();


    const person = people?.find(x => x.PersonId == id);
 
    console.log(person)

    useEffect(() => {
        fetch("/api/React", {
            headers:{
                accepts: "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => setPeople(data))
    }, []);

 
        
    const items = person?.Languages.map((item) => 
      <ul className='lista'><li>{item}</li></ul>
    );
    
    const handleClick = (e) => {
       
       const test = id.toString();
        
       fetch('/api/React', {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
               
            },
            body: JSON.stringify(test)
        }).then(() => {
            console.log('Person deleted');
            navigate('/People')
        })
        
    };

 
    

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>PersonId</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Languages</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{person?.PersonId}</td>
                    <td>{person?.Name}</td>
                    <td>{person?.Phone}</td>
                    <td>{person?.City}</td>
                    <td>{person?.Country}</td> 
                    <td>{items}</td>
                    <td><button onClick={handleClick} className="btn btn-primary">
                        Delete
                    </button></td>
                </tbody>
            </table>


        </div>
      
    );
}

export default Details;
