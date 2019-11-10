import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {
    return (
        <div>
            {
                props.items.map((item) => {
                    return <Item key={item.id} {...item}
                                 malzemeEkle={props.malzemeEkle}
                                malzemeCikar={props.malzemeCikar}
                    />
                })
            }
        </div>
    );
}

export default ItemList;
