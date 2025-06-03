import { 
  configureStore, 
  Middleware, 
  UnknownAction, 
  combineReducers
} from '@reduxjs/toolkit';
import themeReducer from '@/features/theme/themeSlice';

// 1. Corrigindo o rootReducer não utilizado
const rootReducer = combineReducers({
  theme: themeReducer,
  // Adicione outros reducers aqui
});

// 2. Tipagem avançada para o logger
const logger: Middleware<
  {}, // Tipo para a store API
  RootState // Tipo do estado
> = (store) => (next) => (action: any) => {
  const actionType = action.type || 'UNKNOWN_ACTION';
  
  console.group(actionType);
  console.info('Dispatching', action);
  
  const result = next(action);
  
  console.log('New State', store.getState());
  console.groupEnd();
  
  return result;
};

export const store = configureStore({
  reducer: rootReducer, // Usando o rootReducer corretamente
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger),
});

// Tipagem avançada
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;