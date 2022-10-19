import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagorys, setCatagorys] = useState([])


    useEffect(() =>{
        fetch('http://localhost:5000/news-catagory')
        .then(Response => Response.json())
        .then(data => setCatagorys(data))
    }, [])
    return (
        <div>
            <h4>All Catagory: {catagorys.length} </h4>
            <div>
                {
                    catagorys.map(catagory => <p
                     key={catagory.id}>
                        <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;