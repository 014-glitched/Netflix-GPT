import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    //Fetch data from TMDB API and update store
    const dispatch = useDispatch();

    const getNowPlayinigMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    } ;

    useEffect(() => {
        getNowPlayinigMovies(); 
    }, []);
}

export default useNowPlayingMovies;