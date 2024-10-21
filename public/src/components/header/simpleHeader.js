const head = document.head;
const body = document.body;

const style = "<link rel='stylesheet' href='../../components/header/StyleHeader.css'>"
head.innerHTML += style

const header = document.createElement("div")
header.setAttribute("id", "simple-header")
header.setAttribute("class", "simple-header")
body.append(header)

const headerContent =
    "<header>" +
        "<img src='../../assets/images/logo-simples.png'/>" +
        "<div>" +
            "<img src='../../assets/images/user-svgrepo-com.svg'/>" +
            "<p>" +
                "<strong>Entre</strong>" + " ou " + "<strong>Cadastre-se</strong>" +
            "</p>" +
        "</div>" +
    "</header>"

header.innerHTML += headerContent


