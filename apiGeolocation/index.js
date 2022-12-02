const url = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c2f4f27da4msh01d1fd390de70a1p11f6d8jsne996abb18ad7",
    "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com",
  },
};

let cardInfo = document.getElementById("informacion");

fetch(url, options)
  .then((res) => res.json())
  .then((data) => {
    cardInfo.innerHTML = `
    
    <div class="my-2">
    <h6 class="display-6">Direccion Ip</h6>
    <p>${data.ip}</p>
    </div>
    <div class="my-2">
    <h6 class="display-6">Tipo</h6>
    <p>${data.type}</p>
    </div>
     <div class="my-2">
     <h6 class="display-6">Continente</h6>
    <p>${data.continent.name}</p>
    <p>${data.continent.geonameid}</p>
    </div>
    <div class="my-2">
     <h6 class="display-6">Ciudad</h6>
    <p>${data.country.name}</p>
    <p>${data.country.code}</p>
    <p>${data.country.capital}</p>
    <p>${data.country.phone_code}</p>
    <p>${data.time.timezone}</p>
    </div>
     <div class="my-2">
     <h6 class="display-6">Bandera</h6>
     <div class="my-3 caja-bandera">
     <object data = ${data.country.flag.file} width="auto" height="auto"></object>
     </div>
    </div>
    
    `;
  })
  .catch((err) => console.error("error:" + err));
