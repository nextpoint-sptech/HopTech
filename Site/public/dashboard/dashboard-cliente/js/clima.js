const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-22.7386&lon=-45.5921&appid=4b025dd406353d7177a9bade8545aa18`; // ID apenas para uso acadêmico, finalizando a sprint trocaremos

async function checarClima() {
    const response = await fetch(apiUrl); // Fetch: Buscando o dado na URL
    var data = await response.json();

    console.log(data);
    
    // Pegando o ID da div específica que colocarei a imagem
    const weatherIconElement = document.querySelector('#weather-icon');

    // Inserindo um atributo dinâmico para a imagem do clima
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

    document.querySelector("#city").innerHTML = data.name; // Nome da sidade
    document.querySelector("#temperature span").innerHTML = Math.round(data.main.temp) / 20; // Temperatura
    // document.querySelector("#description").innerHTML = data.weather[0].description; // Descrição
    document.querySelector("#humidity span").innerHTML = `${data.main.humidity}%`; // Umidade
    document.querySelector("#wind span").innerHTML = `${data.wind.speed} Km/h`; // Vel. do vento
}

checarClima()