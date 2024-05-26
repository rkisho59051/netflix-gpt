import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {

const dispatch = useDispatch();

  useEffect(() => {
    getPopularMoviesList();
  }, [])

  const getPopularMoviesList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results))
    console.log('json', json?.results);
  }

}

export default usePopularMovies;