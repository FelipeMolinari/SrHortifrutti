import HttpClient from './http-client';
import { ProductProps } from '../../typescriptInterface';

class MainApi extends HttpClient {
  public constructor() {
    super('http://localhost:3333');
  }

  getProducts = () => this.instance.get<ProductProps[]>('/products');
  
}

export default MainApi;