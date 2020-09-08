import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 55%;

  --color-primary: #62CC80;
  --color-primary-dark: #7BBF8E;
  --color-secundary: #5280E0;
  --color-secundary-dark: #3B6BCE;
  --color-delete: #FF5959;
  --color-tittle: #232423;
  --color-primary-text: #32264D;
  --color-secundary-text: #474D47;
  --commum-background: #f1f1f1;
  --commum-input: #FAFAFC;
  --commum-input-text: #9C98A6;
  --commum-border: #E6E6F0;
  --commum-text: #707070;
  --commum-disabled: #DCE5;
  --commum-disabled-text: #9999;
  --commum-card: #FFF;
  --commum-nav: #1E1E2D;
  --commum-nav-selected: #1B1B28;

}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body,
#root {
	width: 100vw;
  height: 100vh;

}
#root {
	display: flex;
}
body,
input,
textarea {
	font: 500 1.6rem Poppins;
}
a, button{
	font: 500 1.6rem Archivo;
}

@media (min-width: 900px) {
	:root {
		font-size: 62.5%;
	}
}
`;
