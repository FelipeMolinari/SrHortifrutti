import axios, { AxiosInstance, AxiosResponse } from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError);
  };

  private _handleResponse = (reponse: AxiosResponse) => {
    return reponse.data;
  };

  protected _handleError = (error: any) => {
    return Promise.reject(error);
  };
}
export default HttpClient;
