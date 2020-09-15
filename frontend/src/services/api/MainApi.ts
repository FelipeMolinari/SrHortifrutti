import HttpClient from './http-client';
import { ProductProps, SectionResponse, UserOwner } from '../../typescriptInterface';

class MainApi extends HttpClient {
  public constructor() {
    super('http://localhost:3333');
  }

  getProducts = () => this.instance.get<ProductProps[]>('/products');
  getProviders = () => this.instance.get<UserOwner[]>('/providers');
  loginUser = (email: string, password: string) =>
    this.instance.post<SectionResponse>('/section', {
      email,
      password
    });
  createUser = (user: UserOwner) => this.instance.post<UserOwner>('/user', user);
}

export default new MainApi();
