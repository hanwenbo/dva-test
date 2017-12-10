/**
 * Url
 * @author 韩文博
 */
export default class Url {
  static createUrl(obj) {
    let url = '?';
    for (const key in obj) {
      if (key !== 'url' && obj[key] !== null) {
        url += `(${key}=${encodeURIComponent(obj[key])}&)`;
      }
    }
    return url.substring(0, url.lastIndexOf('&'));
  }
}
