const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById('search-btn');


const moviesList = [];

const renderMovies = ()=>{
  const movieList = document.getElementById("movie-list");

  if(moviesList.length === 0){
    movieList.classList.remove('visible');
    return;
  }else{
    movieList.classList.add("visible");
  }
  
  movieList.innerHTML = "";

  moviesList.forEach((movie)=>{
    const movieEl = document.createElement("li");
    movieEl.textContent = movie.info.title;
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
          [extraname]:extraname
        },
        id: Math.random()
     }
      
     moviesList.push(newMovie)

     console.log(newMovie)
     renderMovies();
}


addMovieBtn.addEventListener("click",addmovieHandler)