/**
 * Created by mehmetyurtar on 11/9/19.
 */
import React from 'react';

function Item(props) {
    return (
        <div className="BuildControl">
            <div className="Label">
                {props.name}
            </div>
            <button className="Less">Cıkar</button>
            <button className="more" onClick={() => {
                props.malzemeEkle(props);
            }}>Ekle</button>
        </div>
    );
}

export default Item;
