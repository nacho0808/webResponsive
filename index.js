const opcionesBtn = document.getElementById("opcionesBtn");

opcionesBtn.addEventListener("click", () =>{
    const divOpciones = document.getElementById("opciones");
    
    if(divOpciones.innerHTML != ""){
        divOpciones.innerHTML ="";
    } else {
        divOpciones.innerHTML += `
            <button type="button" class="btn btn-outline-dark ">Opcion</button><br>
            <button type="button" class="btn btn-outline-dark ">Opcion</button><br>
            <button type="button" class="btn btn-outline-dark ">Opcion</button><br>
            <button type="button" class="btn btn-outline-dark ">Opcion</button><br>
        `
    }
});