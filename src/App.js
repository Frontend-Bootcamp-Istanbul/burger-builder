import React from 'react';
import './App.css';
import {Hamburger, TotalPrice, ItemList} from "./components";
import ingrediends from "./data";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: [],
            totalPrice: 0
        };

        this.malzemeEkle = this.malzemeEkle.bind(this);
    }

    malzemeEkle(malzeme){
        this.setState({
            ingredients: [...this.state.ingredients].concat([
                {...malzeme, displayId: Math.random()}
            ])
        })
    }

    malzemeCikar(malzeme){
        this.setState({
            ingredients: this.state.ingredients.filter((ingredient) => {
                return ingredient.displayId !== malzeme.displayId
            })
        })
    }

    render(){
        return (
            <div>
                <Hamburger ingredients={this.state.ingredients} />
                <TotalPrice />
                <ItemList items={ingrediends}
                          malzemeEkle={this.malzemeEkle}
                />
            </div>
        );
    }
}
export default App;
