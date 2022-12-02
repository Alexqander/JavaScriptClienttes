const loadPeople = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const datos = await response.json();
    let personajes = "";
    datos.results.map((per, i) => {
      personajes =
        personajes +
        `
        <tr>
          <th scope='row'>${i}</th>
          <th>${per.name}</th>
          <th>${per.height}</th>
          <th>${per.hair_color}</th>
          <th>${per.eye_color}</th>
          <th>${per.birth_year}</th>
          <th>${per.gender}</th>
        </tr>
      
      `;
    });
    document.getElementById("table").innerHTML = personajes;
  } catch (error) {
    console.error(error);
  }
};

loadPeople();
