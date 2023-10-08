////// Selectors

const imgContainer = document.querySelector(".image-container")
const contentName = document.querySelector(".name")
const contentCity = document.querySelector(".city")
const informations = document.querySelector(".informations p")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let genres;
let genreIndex = 0



////// Functions

// Function: load data 
function loadGenre(item) {
  const { wallpaper, name, category, info } = item
  imgContainer.style.backgroundImage = `url('${wallpaper}')`
  contentName.textContent = name
  contentCity.textContent = category
  informations.textContent = info
}

function nextGenre () {
  genreIndex += 1
  if(genreIndex > genres.length - 1) {
    genreIndex = 0
  }
  loadGenre(genres[genreIndex])
}

function prevGenre () {
  genreIndex -= 1
  if(genreIndex < 0) {
    genreIndex = genres.length - 1
  }
  loadGenre(genres[genreIndex])
}



//Function fetch data
async function fetchInfo() {
  await fetch('/data.json')
    .then(res => res.json())
    .then(data => {
      genres = data
      loadGenre(genres[genreIndex])
    })
}

fetchInfo()


////// Events

// Event: next genre
nextBtn.addEventListener("click", nextGenre)

// Event: prev genre
prevBtn.addEventListener("click", prevGenre)