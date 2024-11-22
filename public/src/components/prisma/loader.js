function loader(){
    // Salva a URL da página atual para redirecionar depois
    const url = window.location.href; 
    localStorage.setItem('urlDestino', url);
    console.log(url)

    // Verifica se o loader já foi exibido na sessão atual
    if (!sessionStorage.getItem("loaderExibido")) {
        sessionStorage.setItem("loaderExibido", "true"); // Marca que o loader foi exibido
        window.location.href = "/public/src/components/prisma/loader.html";
    }
    else {
        // Se o loader já foi exibido
        sessionStorage.removeItem("loaderExibido"); //Então reseta o estado aparecer dnv
    }
}
