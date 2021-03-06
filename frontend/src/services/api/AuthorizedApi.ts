import { AxiosRequestConfig } from 'axios';
import HttpClient from './http-client';
import { getLocalStorageToken } from '../../storage/authLocalStorage';
import {
  EditProductsProps,
  ProductProps,
  ProductPropsStore,
  ProductType,
  GalleryResponseInterface,
  UserOwner
} from '../../typescriptInterface';

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

  updateUser = (userUpdated: UserOwner) =>
    this.instance.put<UserOwner>('/secure/update', userUpdated);

  uploadAvatar = (file: FormData) =>
    this.instance.post<GalleryResponseInterface>(`/secure/files/avatar`, file);

  getProducts = () => this.instance.get<ProductProps[]>('/secure/products');
  storeProduct = (product: ProductPropsStore) =>
    this.instance.post<ProductProps>('/secure/product/add', {
      name: product.name,
      price: product.price,
      type: product.type
    });
  getTypes = () => this.instance.get<ProductType[]>('/secure/avaiables');

  deleteProduct = (id: string) => this.instance.delete(`/secure/product/delete/${id}`);

  updateProduct = (id: string, modifiedProduct: EditProductsProps) =>
    this.instance.put<ProductProps>(`/secure/product/update/${id}`, {
      ...modifiedProduct
    });

  uploadImage = (file: FormData, config: AxiosRequestConfig) =>
    this.instance.post<GalleryResponseInterface>(`/files/gallery`, file, config);

  deleteImage = (id: string) => this.instance.delete(`/files/gallery/${id}`);
}
export default new MainApiProtected();
