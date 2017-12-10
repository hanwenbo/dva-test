import request from '../utils/request';
import { PAGE_SIZE, API_HOST } from '../constants';
import Url from '../utils/url';

export function search({ page }) {
  return request(`${API_HOST}/api/info/search?page=${page}&rows=${PAGE_SIZE}`);
}

export function detail(params) {
  return request(`${API_HOST}/api/info/detail${Url.createUrl(params)}`);
}
