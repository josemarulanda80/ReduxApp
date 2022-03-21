import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import  * as actions  from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  @Input() contador!:number;
  @Output() contadorCambio=new EventEmitter<number>();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
    .subscribe(contador => this.contador=contador)
  }
  reset(){
    this.store.dispatch(actions.resetear())
  }

}
