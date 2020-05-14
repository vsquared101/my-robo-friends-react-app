import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
        <div className="card">
            <div className="content">
                <div className="robo-pic">
                    <img className="right floated ui image" src={`https://robohash.org/${id}?200x200`} alt="robot"/>
                </div>
                <div className="header">
                    {name}
                </div>
                <div className="description">
                    {email}
                </div>
            </div>
        </div>
    );
};

export default Card;