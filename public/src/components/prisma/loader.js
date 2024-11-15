function loader(){
       // Verifica se o loader já foi exibido alguma vez
       const url = window.location.href; //public/src/pages/cadastro/Cadastro.html
       localStorage.setItem('urlDestino', url);
       if (!sessionStorage.getItem("loaderExibido")) {
           //loader foi exibido
           sessionStorage.setItem("loaderExibido", "true");
   
           window.location.href = "/public/src/components/prisma/loader.html";
       }
}