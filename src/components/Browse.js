import Header from "./Header";
import useNowPlayingMovies from  "../custom_Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
     
    useNowPlayingMovies();

    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;