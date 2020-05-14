import React from 'react';

const Scroll = (props) => {
    return (
        <div className="Scroll" style={{ overflow: 'scroll', border: '2px solid yellow', height: '380px', padding: '5px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;