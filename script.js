function accionParaCuandoDigaSI(){
    const respuesta =  confirm("¿Estás  segura de querer   ?"); 
    if(respuesta){
        window.location.href="opcionsi.html"; 
    } else{
        alter("ESPERO PUEDAS CONSIDERARLO") ; 
    }
}

function mueveboton (){
    const width = window.innerWidth; 
    const height = window.innerHeight;

    const newWidth= Math.random()* width; 
    const newHeight= Math.random()* height;

    const btnno= document.getElementById("btnno"); 
    btnno.style.position="absolute";
    btnno.style.left = newWidth + "px";
    btnno.style.top = newHeight + "px";
} 