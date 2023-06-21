const animeEl = document.querySelector(".anime-container")
const animeImageEl = document.querySelector(".anime-image")
const animeNameEl = document.querySelector(".name")
const btnEl = document.getElementById("btn");

const url = "https://api.catboys.com/img"


async function getAnime(){
    try {
        // animeEl.innerText = "Loading..."
     btnEl.disabled=true;
     btnEl.innerText = "Loading..." 
     animeImageEl.src = "spinner.svg"; 
     animeNameEl.innerText = "Updating..."
      
    const response = await fetch(url);
    const data = await response.json();
    btnEl.disabled=false; 
    btnEl.innerText = "Get Anime" 
    animeEl.style.display = 'block';
    animeImageEl.src = data.url;
    animeNameEl.innerText = data.artist;
    console.log(data);
    } catch (error) {
        animeEl.innerText = "There is an error occour please try after some time"
    }
    
}

btnEl.addEventListener('click',getAnime)