console.log("Hello World Rick and Morty");

obtenerPersonajes();

async function obtenerPersonajes() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    return data.results;
}

function pintarPersonajes(personajes) {
    let tarjetasHTML = "";
    personajes.forEach(personaje => {
        tarjetasHTML += `
            <div class="card">
                <img src="${personaje.image}" alt="${personaje.name}">
                <h3>${personaje.name}</h3>
                <p class="species">Especie: ${personaje.species}</p>
                <p class="status">Estado: ${personaje.status}</p>
            </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
} 

obtenerPersonajes().then(pintarPersonajes);