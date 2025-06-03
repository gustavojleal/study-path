// Exemplo em um componente
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { toggleTheme } from '@/features/theme/themeSlice';

const ThemeToggle = () => {
  const theme = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Current theme: {theme}
    </button>
  );
};