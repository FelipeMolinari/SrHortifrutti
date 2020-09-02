import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;
  --color-primary: #92E3A9;
  --color-primary-dark: #7AD895;
  --color-secundary: #FFBE9D;
  --color-secundary-dark: #FFAF86;
  --color-primary-text: #32264D;
  --color-secundary-text: #474D47;
  --commum-background: #F0F0F7;
  --commum-input: #FAFAFC;
  --commum-input-text: #9C98A6;
  --commum-border: #E6E6F0;
  --commum-text: #707070;
  --commum-disabled: #DCDCE5;
  --commum-card: #FFF;

}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body,
#root {
	height: 100vh;
}
#root {
	display: flex;
	align-items: center;
	justify-content: center;
}
body,
input,
textarea {
	font: 500 1.6rem Poppins;
}
a, button{
	font: 500 1.6rem Archivo;
}
.container {
	width: 80%;
	max-width: 900px;
	align-items:center;
	justify-content:center;
  display:flex;
  background:"#388";
	
}
@media (min-width: 700px) {
	:root {
		font-size: 62.5%;
	}
}
`;