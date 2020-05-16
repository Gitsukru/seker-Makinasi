import './style.scss';
import {CandyMachine} from "./src/model/CandyMachine";

let productData = [{
        name: "Lokum",
        icon: "/img/lokum.png",
        price: 1.5,
        volume: 20
    },
    {
        name: "Akide",
        icon: "/img/akide.png",
        price: 5,
        volume: 26
    },
    {
        name: "Jelibon",
        icon: "/img/jelibon.png",
        price: 2.75,
        volume: 45
    },
    {
        name: "Burgulu lolipop",
        icon: "/img/b-lolipop.svg",
        price: 2.5,
        volume: 20
    },
    {
        name: "Yuvarlak lolipop",
        icon: "/img/y-lollipop.png",
        price: 3,
        volume: 50
    }
]

let runMachine = new CandyMachine(productData);
runMachine;
