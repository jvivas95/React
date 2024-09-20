// import { heroes } from './data/heroes.js';
//import { heroes } from ".data/heroes.js";

import { heroes } from "./data/heroes";

/* const getHeroesById = (id) => {
    return heroes.find((heroe) => {
        if ( heroe.id == id){
        return true;
    }
    else{
        return false;
    }
    });
}; */

const getHeroesById = (id) =>  heroes.find((heroe) => heroe.id == id)

console.log(getHeroesById(2));

const getHeroesByOwner = (univers) => heroes.filter((heroe) => heroe.owner == univers);

console.log(getHeroesByOwner('DC'));