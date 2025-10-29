document.querySelector("#formulario").addEventListener("submit", (ev) => {
  ev.preventDefault();
  let nombre = document.querySelector("#nombre").value;

  const url2=new URL("https://rickandmortyapi.com/api/character/?name="+nombre)


  const url=new URL("https://rickandmortyapi.com/api/character/")
  url.searchParams.set("name",nombre)

  try {
    fetch(url)
      .then((datatype) => datatype.json())
      .then((response) => {
        console.log(response.results);
        let salida=""
        for (let elemento of response.results) {
            salida+=`<div>
                <h4>Nombre:${elemento.name}</h4>
                <h4>Estado:${elemento.status}</h4>
                <h4>Especie:${elemento.species}</h4>
                <p><img src="${elemento.image}"></p>
            </div>`
        }

        document.querySelector("#pintar").innerHTML=salida
      });
  } catch (error) {
    console.log(error.message);
  }
  
});
