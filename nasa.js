let url = `https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY`

fetch(url)
    .then(response => response.json())
    .then(data => {
        let resultado = document.getElementById("resultado");
        const img = document.createElement("img");
        img.src = data.url; 
        resultado.appendChild(img);
    })