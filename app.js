import './style.scss';
import {CandyMachine} from "./src/model/CandyMachine";
import {productData} from "./src/variables";

let runMachine = new CandyMachine(productData);
runMachine;
