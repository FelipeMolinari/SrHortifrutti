<br />
<p align="center">
<p align="center">
   <img src="https://github.com/FelipeMolinari/SrHortifrutti/blob/master/frontend/src/assets/images/SeuHotifrutti.png" alt="Logo" width="280"/>
</p>

  <h3 align="center">Seu hortifruti nunca esteve tão próximo de você!</h3>

  <p align="center">
    Sistema de lojas de hortifruti digitais, Crie sua loja e venda seus produtos para milhares de clientes!

</p>



<!-- TABLE OF CONTENTS -->
## Conteúdos

* [Sobre o projeto](#sobre-o-projeto)
  * [Feito com](#feito-com)
* [Models](#models)
  * [User](#user)
  * [Product](#product)
  * [ProductType](#producttype)
  * [Upload](#upload)
  * [Avatar](#avatar)
* [Controllers](#controllers)
  * [User](#user)
  * [Upload](#product)
  * [Sections](#producttype)
  * [Products](#upload)
  * [ProductPublic](#publicproducts)
  * [Avatar](#avatar)

* [Rotas](#rotas)
* [Prerequisitos](#prerequisitos)
* [Instalação](#instalação)
* [License](#license)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## Sobre o projeto


Projeto desenvolvido com o intuíto de ajudar lojas de hortifruti a expandir o número de clientes alcançados através do meio digital. 
Cadastrando sua loja no sistema, você será capaz de cadastrar seus produtos e muito mais! 


### Feito com

Principais tecnologias utilizadas para construção desse projeto!

* [Typescript](https://www.typescriptlang.org)
* [ReactJS](https://pt-br.reactjs.org)
* [NodeJS](https://nodejs.org/en/)
* [MongoDB with mongoose](https://mongoosejs.com)


### Models:

#### User


| Campo      | Descrição                                                                                      |
| ---------- | -----------------------------------------------------------------------------------------------|
| name *      | Nome da loja cadastrada.|
| email *       | Campo obrigatório do tipo string, deve ser único, caso seja informado um email que já existe no banco de dados, mensagem de erro é retornada pelo servidor.        |
| cellphone *     | Celular whatsapp da loja.                                    |
| cep *  | CEP da loja, através dele os campos 'rua', 'bairro' e 'cidade' são preenchidos altomaticamente.                                  |
| rua *  | Rua da loja física, preenchido através do CEP, caso CEP seja inválido, esse campo não será preenchido.                             |   
| bairro *  | Bairro da loja física, preenchido através do CEP, caso CEP seja inválido, esse campo não será preenchido.                             |   
| cidade *  | Cidade da loja física, preenchido através do CEP, caso CEP seja inválido, esse campo não será preenchido.                             |   
| id   | Id do usuário, criado pelo MongoDB, referente ao código ***único*** do usuário.                             |   
| createdAt  | Objeto Date do momento da criação do registro. Criado pelo Mongodb.                      |
| updatedAt  | Objeto Date do momento da última edição do registro. Criado pelo Mongodb.                      |

* - É um campo ***obrigatório*** e a validação e feita pela biblioteca Yup. Caso o campo não seja informado, mensagem de erro na validação é enviada como resposta da requisição.

####  Product


| Campo      | Descrição                                                                                      |
| ---------- | -----------------------------------------------------------------------------------------------|
| name  *     | Nome do produto tipo String.                               |
| price *     | Campo obrigatório do tipo string, referente ao valor do produto que será apresentado na loja   |
| type *      | Tipo do produto, refere ao modelo "ProductType"..                             |
| id        |    Id do produto, criado pelo MongoDB, referente ao código ***único*** do usuário.             |  
| createdAt  | Objeto Date do momento da criação do registo. Criado pelo Mongodb.                             |   
| updatedAt  | Objeto Date do momento da última edição do registro. Criado pelo Mongodb.                      |

* - É um campo ***obrigatório*** e a validação e feita pela biblioteca Yup. Caso o campo não seja informado, mensagem de erro na validação é enviada como resposta da requisição.

#### ProductType 

| Campo      | Descrição                                                                                      |
| ---------- | -----------------------------------------------------------------------------------------------|
| name      | Nome do produto contido no banco de dados.|
| image_url  | Url contendo a imagem do produto que será apresentado na loja         |
| color| Todo produto tem uma cor ***única*** .                             |
| id   | Id do tipo de produto, criado pelo MongoDB, referente ao código ***único*** do usuário.                             |   

#### Upload 

| Campo      | Descrição                                                                                      |
| ---------- | -----------------------------------------------------------------------------------------------|
| name      | Nome original do arquivo que foi feito upload.|
| size  | Tamanho do arquivo que foi feito upload        |
| key| Chave utilizada para encontrar o arquivo.  ***única*** .                             |
| user_id   | Id do usuário que realizou o upload da imagem.                             |   

#### Avatar 

| Campo      | Descrição                                                                                      |
| ---------- | -----------------------------------------------------------------------------------------------|
| name      | Nome original do arquivo que foi feito upload.|
| size  | Tamanho do arquivo que foi feito upload        |
| key| Chave utilizada para encontrar o arquivo.  ***única*** .                             |
| user_id   | Id do usuário que realizou o upload da imagem.                             |   


---


### Controllers

#### User
| Método     | Descrição                                                                                      |
| ---------- | ------------------------------------------------------ |
| index      | Método que lista todos os usuários com suas informações.|
| store      | Método que adiciona um usuário no banco de dados. É feita uma validação dos campos e uma verificação do campo cpf no banco, caso a validação esteja errada ou já existir o email especificado, uma mensagem contendo o erro é enviada na resposta|
| update     | Método responsável por atualizar um usuário. |

***Observações***: 
- No método _store_() o cep enviado deve ser um cep válido, sendo assim, recomendo a utilização do seguinte site que gera ceps válidos: [Gerador de CEP](https://www.4devs.com.br/gerador_de_cep)


#### UploadUser
| Método     | Descrição                                                                                      |
| ---------- | ------------------------------------------------------ |
| index      | Método que lista todos os uploads de um certo usuário.|
| store      | Método que adiciona um arquivo no banco de dados. 
| delete     | Método responsável por deletar um arquivo do banco de dados. É importante notar que somente usuários credenciados podem deletar um arquivo do BD|


#### 6.3 SectionsUploadUser

| Método     | Descrição                                                                                      |
| ---------- | ------------------------------------------------------ |
| store      | Método responsável por criar uma session, recebe como parâmetro o email do usuário e a senha, caso o servidor retorne o status code 200, um token de acesso é gerado, permitindo que um usuário entre no sistema.|



### PublicProducts
| Método     | Descrição                                                                                      |
| ---------- | ------------------------------------------------------ |
| index      | Método que lista todos os produtos cadastrados.|


#### ProductsPublic

| Método     | Descrição                                                                                      |
| ---------- | ------------------------------------------------------ |
| index      | Método que lista todos os produtos de um certo usuário.|
| store      | Método que adiciona um produto no banco de dados. 
| delete     | Método responsável por deletar um produto do banco de dados. É importante notar que somente usuários credenciados podem deletar um arquivo do BD|


#### Avatar

| Método     | Descrição                                                                                      |
| ---------- | ------------------------------------------------------ |
| index      | Método que retorna o avatar do usuário.|
| store      | Método que adiciona um avatar no banco de dados. 
| delete     | Método responsável por deletar um avatar do banco de dados. É importante notar que somente usuários credenciados podem deletar um arquivo do BD|





### Rotas

Os seguintes métodos foram implementados:

```ts


const routes = express.Router();

routes.get('/products', PublicProductsController.index);
routes.get('/providers', UserController.index);

routes.post('/user', UserController.store)
routes.post('/section', SectionController.store)
routes.get('/gallery/:user_id', GalleryController.index)


// Secutes routes
routes.use(isAuth)

routes.post('/secure/files/avatar', uploadAvatar.single("file"), AvatarController.store );
routes.put('/secure/update', UserController.update)
routes.post('/secure/product/add', ProductController.store)

routes.delete('/secure/product/delete/:id', ProductController.delete)
routes.put('/secure/product/update/:id', ProductController.update)

routes.get('/secure/avaiables', ProductTypesController.index)

routes.get('/secure/products', ProductController.index)
routes.post('/files/gallery', uploadGallery.single("file"),GalleryController.store)
routes.delete('/files/gallery/:id', GalleryController.delete)


```

- No Headers da requisição _store_ de uma nova transação deve ter um campo _authorization_ contendo o **token** gerado pelo store de uma session. Dessa forma, garante que o usuário está conectado no sistema. Caso o token não seja informado, a API retornará _"Token not provided"_, e a função _next()_ referente ao middleware de autenticação (isAuth) não será chamada. 


---

### Prerequisitos

This is an example of how to list things you need to use the software and how to install them.
* npm
Instalar node o node e o npm 
[NODE](https://nodejs.org/en/)
[MongpDB](https://www.mongodb.com/try/download/community)

### Instalação

1. Clone the repo
```sh
git clone https://github.com/FelipeMolinari/SrHortifrutti.git
```
2 - cd/frontend
```sh
npm install
```
3 - cd/backend
```sh
npm install
```

### Run

1. cd/frontend
```sh
npm start
```
2 - cd/backend
```sh
npm dev
```



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [StyledComponents](https://styled-components.com/docs/api)
* [React hook form](https://react-hook-form.com/ts/)
* [Yup](https://github.com/jquense/yup)
* [React Dropzone](https://github.com/react-dropzone/react-dropzone)
* [Nuka Carousel](https://github.com/FormidableLabs/nuka-carousel)
* [React icons](https://react-icons.github.io/react-icons/)







