const image = document.getElementById("img-box");
const movie_name = document.getElementById("movie-title");
const movie_rating = document.getElementById("rating");
const genre1 = document.getElementById("genre1");
const genre2 = document.getElementById("genre2");
const cast1 = document.getElementById("cast1");
const cast2 = document.getElementById("cast2");
const cast3 = document.getElementById("cast3");
const movie_plot = document.getElementById("movie_plot");
const release_date = document.getElementById("release_date");
const movie_duration = document.getElementById("movie_duration");
const search = document.getElementById("button");
const input = document.getElementById("input");
const search_movie_here = document.getElementById("search-movie");
const movie_container = document.getElementById("movie-container");



// Fetch movie using OMDB API
const getmovieinfo = async (movie) => {
  const myapikey = "9e85bb41";
  const url = `http://www.omdbapi.com/?apikey=${myapikey}&t=${movie}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      alert("Movie not found! Please check your spelling.");
      return; // Exit if no movie found
    }

    showmoviedata(data);
  } catch (error) {
    console.error("Failed to fetch movie data:", error);
    alert("An error occurred while fetching movie details.");
  }
};
const showmoviedata = (data) => {
    search_movie_here.style.display="none"
    movie_container.style.display="flex";

     const Title = data.Title;
     const imdbRating = data.imdbRating;
     const Genre = data.Genre;
     const Released = data.Released;
     const Runtime = data.Runtime;
     const Actors = data.Actors;
     const Plot = data.Plot;
     const Poster = data.Poster;

     document.getElementById("movie-title").innerText = Title;
     document.getElementById("rating").innerText = imdbRating;
     document.getElementById("genre1").innerText = Genre.split(", ")[0];
     document.getElementById("genre2").innerText = Genre.split(", ")[1] || "";
     document.getElementById("release_date").innerText = Released;
     document.getElementById("movie_duration").innerText = Runtime;
     document.getElementById("cast1").innerText = Actors.split(", ")[0];
     document.getElementById("cast2").innerText = Actors.split(", ")[1];
     document.getElementById("cast3").innerText =
       Actors.split(", ")[2] || "N/A";
     document.getElementById("movie_plot").innerText = Plot;

     // Changing the image (movie poster)
     document.getElementById(
       "img-box"
     ).style.backgroundImage = `url(${Poster})`;
   };

search.addEventListener("click", function () {
  const movie = input.value.trim();

  if (movie !== "") {
    getmovieinfo(movie);
    input.value = ""; 
  }
});


