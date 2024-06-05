const CountriesUl = document.getElementById("countries")
function getCountries(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


