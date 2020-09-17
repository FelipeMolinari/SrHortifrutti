import HttpClient from './http-client';
import {
  FormReviewProps,
  GalleryResponseInterface,
  ProductProps,
  SectionResponse,
  UserOwner
} from '../../typescriptInterface';

class MainApi extends HttpClient {
  public constructor() {
    super('http://localhost:3333');
  }

  getProducts = () => this.instance.get<ProductProps[]>('/products');
  getProviders = () => this.instance.get<UserOwner[]>('/providers');
  showProvider = (user_id: string) => this.instance.get<UserOwner>(`/user/${user_id}`);
  loginUser = (email: string, password: string) =>
    this.instance.post<SectionResponse>('/section', {
      email,
      password
    });
  createUser = (user: UserOwner) => this.instance.post<UserOwner>('/provider', user);
  getImages = (user_id: string) =>
    this.instance.get<GalleryResponseInterface[]>(`/gallery/${user_id}`);

  createReview = (reviewData: FormReviewProps) =>
    this.instance.post<FormReviewProps>('/review', reviewData);
  getReview = (user_id: string) =>
    this.instance.get<FormReviewProps[]>(`/review/${user_id}`);
}

export default new MainApi();
