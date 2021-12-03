import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
// *!Modificamos la forma de importación de los actions para mejorar la forma de importación.
// import { incrementar, decrementar } from './contador/contador.actions';
import * as actions from './contador/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor( private store: Store<AppState> ){
  }

  ngOnInit(): void {
    // **Subscripción a cualquier cambio de estado en el store.
    // *? puede ser aplicado en el constructor o en el ngOnInit donde es más recomendable
    // this.store.subscribe( (contador) => this.contador = contador.contador );

    // *! la funcion 'select()' nos permite seleccionar un nodo especifico del store
    this.store.select('contador').subscribe( (contador) => this.contador = contador );
  }

  // ** Disparamos acciones las cuales modificaran la data
  incrementar(){
    this.store.dispatch( actions.incrementar() );
  }

  decrementar(){
    this.store.dispatch( actions.decrementar() );
  }
}
