const loadPeople = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/book/index");
    const datos = await response.json();
    let libros = "";
    datos.data.map((libro, i) => {
      libros =
        libros +
        `
        <tr>
          <th scope='row'>${i}</th>
          <th>${libro.isbn}</th>
          <th>${libro.title}</th>
          <th>${libro.description}</th>
          <th>${libro.published_date}</th>
          <th>${libro.category.name}</th>
          <th>${libro.editorial.name}</th>
        </tr>
      
      `;
    });
    document.getElementById("table").innerHTML = libros;
  } catch (error) {
    console.error(error);
  }
};

loadPeople();
