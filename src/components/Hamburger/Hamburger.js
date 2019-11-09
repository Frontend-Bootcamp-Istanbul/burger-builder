import React from 'react';

function Hamburger(props) {
    return (
        <div>
            <div className="BreadTop" style={{
                height: "100px"
            }}></div>
            {
                props.ingredients.length < 1 && <div style={{
                    textAlign: "center"
                }}>
                    Malzeme Ekleyin
                </div>
            }
            {
                props.ingredients.map((ingredient) => {
                   return <div key={ingredient.id} style={{
                       height: "20px",
                       backgroundColor: ingredient.color,
                       width: "80%",
                       margin: "0 auto",
                       marginTop: "10px"
                   }}></div>
                })
            }
            <div className="BreadBottom" style={{
                height: "50px"
            }}></div>
        </div>
    );
}

export default Hamburger;
