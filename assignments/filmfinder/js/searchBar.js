// search-bar

const searchBar = document.querySelector(".search-bar__input");
const getMovies = document.querySelectorAll("li");
const removeSearch = document.querySelector("#movie-box");

const searchItems = (e) => {
  const { value } = e.target;
  const searchMovie = value.toUpperCase();
  for (const movieName of getMovies) {
    let name = movieName.childNodes[0].childNodes[0].alt.toUpperCase();
    if (name.includes(searchMovie)) {
      movieName.style.display = "inline";
    } else {
      movieName.style.display = "none";
    }
  }
};
searchBar.addEventListener("input", searchItems);
