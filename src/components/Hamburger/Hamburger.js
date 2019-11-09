import React from 'react';

function Hamburger() {
    return (
        <div>
            <div className="BreadTop" style={{
                height: "100px"
            }}></div>
            <div style={{
                textAlign: "center"
            }}>
                Malzeme Ekleyin
            </div>
            <div className="BreadBottom" style={{
                height: "50px"
            }}></div>
        </div>
    );
}

export default Hamburger;
