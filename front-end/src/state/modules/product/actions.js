import * as types from './types';

export const fetchList = () => ({
  type: types.FETCH_LIST,
  meta: {
    async: true,
    blocking: true,
    path: '/product',
    method: 'GET'
  }
});

// export const fetchDetails = slug => ({
//   type: types.FETCH_DETAILS,
//   meta: {
//     async: true,
//     blocking: true,
//     path: `/product/${slug}`,
//     method: 'GET'
//   }
// });

export const filter = filter => ({
  type: types.FILTER_BY_TYPE,
  meta: {
    async: true,
    blocking: true,
    path: `/product?${_parsingFilter(filter)}`,
    method: 'GET'
  }
});

const _parsingFilter = filterObj => {
  let filter = '';
  for (let key in filterObj) {
    filter += `${key}=${filterObj[key]}&`;
  }
  return filter.slice(0, filter.length - 1);
};

/*
export const filterByColor = color => ({
  type: types.FETCH_DETAILS,
  meta: {
    async: true,
    blocking: true,
    path: `/product/filter?color=${color}`,
    method: 'GET'
  }
});

export const filterByPrice = (fromPrice, toPrice) => ({
  type: types.FETCH_DETAILS,
  meta: {
    async: true,
    blocking: true,
    path: `/product/filter?fromPrice${fromPrice}&toPrice${toPrice}`,
    method: 'GET'
  }
});
*/
