// search-bar

const searchBar = document.querySelector(".search-bar__input");
const getMovies = document.getElementsByTagName("li");
let removeSearch = document.querySelector("#movie-box");

const searchItems = (e) => {
  const { value } = e.target;
  const searchMovie = value.toLowerCase();
  for (const nameMovie of getMovies) {
    let name = nameMovie.textContent.toLowerCase();
    if (name.includes(searchMovie)) {
      nameMovie.style.display = "inline";
    } else {
      nameMovie.style.display = "none";
    }
  }
};
searchBar.addEventListener("input", searchItems);
