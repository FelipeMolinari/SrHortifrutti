export default function selectedImage(id: number): string {
  switch (id) {
    case 1:
      return 'https://cdn.pixabay.com/photo/2017/09/10/18/11/apple-2736410_960_720.png';
    case 2:
      return 'https://lh3.googleusercontent.com/proxy/1L0ZWtAIPXK-FE2l23ddsjVJPpDb95ZeW1dvGz9_xjX_bamxscA-9KubhA5fss9T4LaAxzYS0P6YGELtjScALnddMYCeHWX_Qtv29TeieAjH_IHKRrEK0mqdZrs17QmiDCOoDko';
    default:
      return 'https://polpasefrutas.com.br/arquivos/imagens/produtos/mesa/morango.png';
  }
}
