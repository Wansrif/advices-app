import { SET_LOCAL, SET_THEME, SET_ADVICE, GET_ADVICE, SET_LOADING } from '@containers/App/constants';

export const setLocale = (locale) => ({
  type: SET_LOCAL,
  locale,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme,
});

export const getAdvice = () => ({
  type: GET_ADVICE,
});

export const setAdvice = (advice) => ({
  type: SET_ADVICE,
  advice,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});
