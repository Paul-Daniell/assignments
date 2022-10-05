const movieBox = document.querySelector("#movie-box");

const addMoviesToDom = function (movies) {
  const movieList = movies.map((movie) => {
    const listitem = document.createElement("li");
    const movieLink = function () {
      const linkPageId = movie.imdbID;
      return "https://www.imdb.com/title/" + linkPageId;
    };
    const href = document.createElement("a");
    href.href = movieLink();
    href.target = "_blank";

    const moviePoster = document.createElement("img");
    moviePoster.setAttribute("src", movie.poster);
    moviePoster.setAttribute("alt", movie.title);
    listitem.appendChild(href);
    href.appendChild(moviePoster);
    return listitem;
  });
  while (movieBox.firstChild) {
    movieBox.removeChild(movieBox.lastChild);
  }
  movieList.forEach((node) => {
    movieBox.appendChild(node);
  });
};
addMoviesToDom(movies);

const addEventListeners = function () {
  const radioBtn = document.querySelectorAll(`[name="film-filter"]`);
  radioBtn.forEach((radio) =>
    radio.addEventListener("change", handleOnChangeEvent)
  );
};
addEventListeners();

function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "latest":
      filterLatestMovies(2014);
      break;
    case "avenger":
      filterMovies("Avengers");
      break;
    case "x-men":
      filterMovies("X-Men");
      break;
    case "princess":
      filterMovies("Princess");
      break;
    case "batman":
      filterMovies("Batman");
      break;
  }
}

function filterMovies(wordInMovie) {
  let filterMovies = movies.filter((movie) => {
    if (movie.title.includes(wordInMovie)) {
      return movie;
    }
  });
  addMoviesToDom(filterMovies);
}

function filterLatestMovies(year) {
  let filterYearMovies = movies.filter((movie) => {
    if (movie.year >= year) {
      return movie;
    }
  });
  addMoviesToDom(filterYearMovies);
}
