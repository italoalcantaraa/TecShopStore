const head = document.head;
const body = document.body;

const style = "<link rel='stylesheet' href='simpleHeader.css'>"
head.innerHTML += style

const header = document.createElement("div")
header.setAttribute("id", "simple-header")
header.setAttribute("class", "simple-header")
body.append(header)


const headerContent = 
    "<header>" +
        "<div>" +
            "<img src=''>"
        "<div>" +
    "<header/>"


