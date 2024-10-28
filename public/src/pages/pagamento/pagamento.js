var lastCheck = null
function radioOn(radio, n){

    if(radio == lastCheck){ //deligar o radio
        radio.checked = false;
        lastCheck = null
    }
    else{
        lastCheck = radio //Tá ligado radio
    }
    OcultConteiner(n)
}

function OcultConteiner(num){
    String.toString(num)
    const ocult = document.getElementById(`ocult${num}`)
    if(lastCheck != null){
        ocult.style.display = "flex";
    }
    else{
        ocult.style.display = "none"
    }
}