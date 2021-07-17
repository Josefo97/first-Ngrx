import { Action } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";


export function contadorReducer( state: number = 10, action: Action ){
    
    switch( action.type ){

        default:
            return state;

        case incrementar.type:
            return state + 1; // *!Es recomendable manipular así el state, para no mutarlo
        
        case decrementar.type:
            return state - 1;
    }
}