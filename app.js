import './style.scss';
import {CandyMachine} from "./src/model/candyMachine";

let productData = [{
        name: "lokum",
        icon: "/img/lokum.png",
        price: 1.5,
        volume: 20
    },
    {
        name: "akide",
        icon: "/img/akide.png",
        price: 5,
        volume: 26
    },
    {
        name: "jelibon",
        icon: "/img/jelibon.png",
        price: 2.75,
        volume: 45
    },
    {
        name: "burgulu lolipop",
        icon: "/img/b-lolipop.svg",
        price: 2.5,
        volume: 20
    },
    {
        name: "yuvarlak lolipop",
        icon: "/img/y-lollipop.png",
        price: 3,
        volume: 50
    }
]


let packageData = [{
    name: "Small",
    price: 0.20,
    volume: 100
},
{
    name: "Medium",
    price: 0.35,
    volume: 300
},
{
    name: "Large",
    price: 0.70,
    volume: 500
}
]

let runMachine = new CandyMachine(productData);
runMachine.init();
