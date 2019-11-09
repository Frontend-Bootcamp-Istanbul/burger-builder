import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {
    return (
        <div>
            {
                props.items.map((item) => {
                    return <Item key={item.id} {...item}  malzemeEkle={props.malzemeEkle}/>
                })
            }
        </div>
    );
}

export default ItemList;
