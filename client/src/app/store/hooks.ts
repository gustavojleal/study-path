import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './store';

// Exporte as tipagens principais aqui
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Crie hooks tipados para uso em toda aplicação
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;