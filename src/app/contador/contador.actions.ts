import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
export const multiplicar =createAction(
    '[contador] Multiplicar',
    props<{numero:number}>()
);
export const  dividir = createAction(
    '[contador] Dividir',
    props<{numero:number}>()
);
export const resetear = createAction('[Contador] Resetear');