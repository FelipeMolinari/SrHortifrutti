import { CartProps } from '../typescriptInterface';

const AUTH_USER = 'auth_user';
const TOKEN_USER = 'token_user';
export function setLocalStorageUser(user: object | null) {
  localStorage.setItem(AUTH_USER, JSON.stringify(user));
}

export function getLocalStorageUser() {
  const data = localStorage.getItem(AUTH_USER);
  if (data) {
    const dataParsed = JSON.parse(data);
    return dataParsed;
  } else return null;
}
export function setLocalStorageToken(token: string | null) {
  if (token) {
    localStorage.setItem(TOKEN_USER, token);
  } else {
    localStorage.removeItem(TOKEN_USER);
  }
}

export function getLocalStorageToken() {
  const data = localStorage.getItem(TOKEN_USER);
  if (data) {
    return data;
  } else return null;
}
