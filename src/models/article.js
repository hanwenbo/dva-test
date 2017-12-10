import * as articleService from '../services/article';

export default {
  namespace: 'article',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    * search({ payload: { page = 1 } }, { call, put }) {
      const { data } = yield call(articleService.search, { page });
      yield put({
        type: 'save',
        payload: {
          data: data.list,
          total: data.page_data.total_number,
          page: parseInt(page, 10),
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      const location = history.getCurrentLocation();
      switch (location.pathname) {
        case '/article':
          if (location.action === 'POP') {
            dispatch({ type: 'search', payload: location.query });
          }
          break;
        default:
          break;
      }
      // listen 每次走路由都会通知，直接访问的情况下除外
      return history.listen(({ pathname, query }) => {
        if (pathname === '/article') {
          dispatch({ type: 'search', payload: query });
        }
      });
    },
  },
};
