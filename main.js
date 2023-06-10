console.log("si funciona")
//alert( "hola mundo" )
//     var nombreUS =prompt ( "ingresa tu nombre" )
//     alert (nombreUS + "Bienvenido a la api de Rick And Morty" )

//     var numero =parseInt(prompt ("ingresa tu numero"))
//     //convierte un string a un numero entero

//     var numero2 =parseInt(
//         prompt("ingresa otro numero ")
//     )
//     //convierte un string a un numero entero

//     var suma = numero + numero2
//     alert( "la suma de los numeros es:" + suma)
//     //parseIn( "1" ) convierte un string a un numero entero

const paraVer = () => {
    console.log("dasdsa")
}

paraVer();
function personajes(done) {
    
    const url = "https://rickandmortyapi.com/api/character";
 
    fetch(url)
    .then(resp => resp.json())
    .then(data => done(data))
     .catch(error => console.log(error))
     .finally(() => console.log("finalizo"));

};

function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

personajes(mostrarDatos);
