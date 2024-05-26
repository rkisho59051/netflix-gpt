
  // fetch trailer video && updating the store with trailer video data

import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

  const useMovieTrailer = async (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
      getMovieVideos();
    }, []);

    const getMovieVideos = async () => {

      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("video data", json);
  
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      console.log("trailor extracted", trailer);
      dispatch(addTrailerVideo(trailer));
    }

  };

  export default useMovieTrailer;