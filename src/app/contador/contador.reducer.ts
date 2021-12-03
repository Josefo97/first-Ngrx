import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";


// export function contadorReducer( state: number = 10, action: Action ){
    
//     switch( action.type ){

//         case incrementar.type:
//             return state + 1; // *!Es recomendable manipular así el state, para no mutarlo

//         case decrementar.type:
//             return state - 1;

//         default:
//             return state;
//     }
// }

export const iniitialState = 20;

const _contadorReducer = createReducer( iniitialState, 
    on( incrementar, state => state + 1 ),
    on( decrementar, state => state - 1 ),
    );

export function contadorReducer( state: number, action: Action ){
    return _contadorReducer( state, action);
}