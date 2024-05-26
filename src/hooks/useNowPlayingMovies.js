import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMoviesList();
  }, [])

  const getNowPlayingMoviesList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results))
    console.log('json', json?.results);
  }

}

export default useNowPlayingMovies;