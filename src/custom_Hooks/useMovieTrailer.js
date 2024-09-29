import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice';


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    //Fetch trailer video and update the store with trailer video data
    const getMovieVideos = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const res = await data.json();
        // console.log(res);

        const filterData = res.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : res.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;