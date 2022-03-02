const API_KEY = `014b5909ccfcbc40e26fa3881d4e78ee`;
const searchTempeture = () => {
    const city = document.getElementById('searchInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    if (city == '') {
        return alert('Enter a valid city name')
    }

    else {
        fetch(url)
            .then(res => res.json())
            .then(data => tempeture(data))
    }

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}
const tempeture = data => {
    const city = document.getElementById('searchInput');
    city.value = ''
    if (data.cod == '404') {
        return alert(`This is not a city name`)
    }
    console.log(data);
    setInnerText('city', data?.name)
    setInnerText('temp', data?.main?.temp)
    setInnerText('weather', data?.weather[0]?.main)
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}