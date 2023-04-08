const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById('search-btn');


const moviesList = [];

const renderMovies = (filter = null)=>{
  const movieList = document.getElementById("movie-list");

  if(moviesList.length === 0){
    movieList.classList.remove('visible');
    return;
  }else{
    movieList.classList.add("visible");
  }
  
  movieList.innerHTML = "";

  const filteredMovies =!filter? moviesList: moviesList.filter(movie => movie.info.title.includes(filter))

  filteredMovies.forEach((movie)=>{
    const movieEl = document.createElement("li");
   let text = movie.info.title + ' - ';
   for(const key in movie.info){
    if(key !== 'title'){
      text = text + `${key} : ${movie.info[key]}`
    }
   }
   movieEl.textContent = text;
    movieList.append(movieEl);
  })

}

const addmovieHandler = () =>{

  const title = document.getElementById("title").value;
  const extraname = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if(title.trim()===""||
     extraname.trim()===""||
     extraValue.trim()==""){
      return;
     }

     const newMovie = {
        info:{
          title,
          [extraname]:extraValue
        },
        id: Math.random()
     }
      
     moviesList.push(newMovie)

     console.log(title === "title")
     renderMovies();
}


const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);

}

addMovieBtn.addEventListener("click",addmovieHandler)
searchBtn.addEventListener("click",searchMovieHandler)