import { produce } from 'immer';

import { SET_ADVICE, SET_LOADING, SET_LOCAL, SET_THEME } from '@containers/App/constants';

export const initialState = {
  locale: 'id',
  theme: 'dark',
  advice: {},
  loading: false,
};

export const storedKey = ['locale'];

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOCAL:
        draft.locale = action.locale;
        break;
      case SET_THEME:
        draft.theme = action.theme;
        break;
      case SET_ADVICE:
        draft.advice = action.advice;
        break;
      case SET_LOADING:
        draft.loading = action.loading;
        break;
    }
  });

export default appReducer;
