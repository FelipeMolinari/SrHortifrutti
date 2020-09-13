import { AxiosRequestConfig } from 'axios';
import HttpClient from './http-client';
import { getLocalStorageToken } from '../../storage/authLocalStorage';
import { ProductProps } from '../../typescriptInterface';
class MainApiProtected extends HttpClient {
  public constructor() {
    super('http://localhost:3333');

    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest, this._handleError);
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = `Bearer ${getLocalStorageToken()}`;
    return config;
  };
  getProducts = () => this.instance.get<ProductProps[]>('/secure/products');
}
export default new MainApiProtected();
