const form = document.querySelector('.form')
const input = document.querySelector('.input')
const countriesEl = document.querySelector('.countries')
const confirmedEl = document.querySelector('.confirmed')
const deathsEl = document.querySelector('.deaths')
const recoveredEl = document.querySelector('.recovered')







//addEventlisteners

form.addEventListener('submit', getWeatherData)

function getWeatherData(e){
    e.preventDefault()
    
    const countriesName = input.value
    const api = `https://covid19.mathdro.id/api/countries/${countriesName}`
    
    //Axios
    axios(api).then(function(response){
        console.log(response.data)
        

        countriesEl.textContent = `${countriesName}`
        confirmedEl.textContent = `${response.data.confirmed.value}`
        deathsEl.textContent = `${response.data.deaths.value}`
        recoveredEl.textContent = `${response.data.recovered.value}`
        input.value =  ""
    })
        
}


