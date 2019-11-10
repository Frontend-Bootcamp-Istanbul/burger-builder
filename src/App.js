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
        this.malzemeCikar = this.malzemeCikar.bind(this);
    }

    malzemeEkle(malzeme){
        this.setState({
            ingredients: [...this.state.ingredients].concat([
                {...malzeme, displayId: Math.random()}
            ])
        })
    }

    malzemeCikar(malzeme){
        // Cikarılması gereken malzemeyi alalım.
        const selectedMalzeme = this.state.ingredients.find((ingredient) => {
           return ingredient.name === malzeme.name;
        });

        // Elimizde olan ilk malzemenin displayId alalım
        const targetId = selectedMalzeme.displayId;

        // Display Id üzerinden bu malzemeyi silelim.
        this.setState({
            ingredients: this.state.ingredients.filter((ingredient) => {
                return ingredient.displayId !== targetId;
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
                          malzemeCikar={this.malzemeCikar}
                />
            </div>
        );
    }
}
export default App;
