import Header from "./Header";
import useNowPlayingMovies from  "../custom_Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../custom_Hooks/usePopularMovies";
import useTopRatedMovies from "../custom_Hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom_Hooks/useUpcomingMovies";

const Browse = () => {
     
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;