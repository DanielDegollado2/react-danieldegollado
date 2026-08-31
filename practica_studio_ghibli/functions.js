async function obtenerPeliculas() {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const data = await response.json();
    console.log(data);
    return data;
}

function pintarPeliculas(peliculas) {
    let tarjetasHTML = "";
    peliculas.forEach(pelicula => {
        tarjetasHTML += `
            <div class="card">
                <img src="${pelicula.image}" alt="${pelicula.title}">
                <h2>${pelicula.original_title}</h2>
                <h3>${pelicula.title}</h3>
                <p class="director">Director: ${pelicula.director}</p>
                <p class="release-date">Fecha de Lanzamiento: ${pelicula.release_date}</p>
            </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
} 

obtenerPeliculas().then(pintarPeliculas);