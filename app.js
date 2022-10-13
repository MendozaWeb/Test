//const formulario = document.querySelector("#formulario");

//crear el evento
//formulario.addEventListener( "submit", validarFormulario )


//mis funciones
/*function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${nombre} tienes la edad de ${edad}`
    formulario.reset();
}*/

//========INIDEEPLINk===========o
const formDeep = document.querySelector("#formDeep");
formDeep.addEventListener("submit", validarformdeep)

function validarformdeep(d) {
    d.preventDefault();
    const reg1 = (/\s+/g, '')
    let proces

    const namedeep = document.querySelector("#nameDeep").value
    proces = namedeep.split(" ").join("_")
    // const namespa = namedeep.replace(reg1);
    const tipodeep = document.querySelector("#tipoDeep").value
    const idhijo = document.querySelector("#idHijo").value
    const idpadre = document.querySelector("#idPadre").value

    const respuestadeep = document.getElementById("respuestadeep");

    /* var cade = namedeep;      
     cade = namedeep.replace(/./g);*/

    respuestadeep.textContent = `====================================\n${namedeep}\n\nDEEPLINK: https://${tipodeep}/categories?name=${proces}&id=${idhijo}&landingtonewPLP=true&defaultSelectParentId=${idpadre}&defaultSortBy=Recomendados`
    //formDeep.reset();
}
//========END DEEPLINk===========o

//numero entre 1 y 6
let dado = Number((Math.random() * 6).toFixed(0));
console.log(dado)
