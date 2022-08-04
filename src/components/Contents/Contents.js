import React, { useEffect } from 'react';
import MovieRow from './MovieRow';
import { useSelector, useDispatch } from 'react-redux';
import { getNetFlixOriginal, getTrendingMovie, getMovieTop, getHornorMovie, getActionMovie, getRomanceMovie, getComedyMovie, getDocumentMovie } from '../Store/action';

const Contents = (props) => {
    const dispatch = useDispatch();
    const NetflixOriginal = useSelector(state => state.initState.arrMovieOriginal)
    const arrMovieTrending = useSelector(state => state.initState.arrMovieTrending)
    const arrMovieTop = useSelector(state => state.initState.arrMovieTop);
    const arrMovieHornor = useSelector(state => state.initState.arrMovieHornor);
    const arrActionMovie = useSelector(state => state.initState.arrMovieAction);
    const arrMovieRomance = useSelector(state => state.initState.arrMovieRomance);
    const arrMovieComedy = useSelector(state => state.initState.arrMovieComedy);
    const arrMovieDocument = useSelector(state => state.initState.arrMovieDocument);

    useEffect(() => {
        dispatch(getNetFlixOriginal());
        dispatch(getTrendingMovie());
        dispatch(getMovieTop())
        dispatch(getHornorMovie())
        dispatch(getActionMovie())
        dispatch(getRomanceMovie())
        dispatch(getComedyMovie())
        dispatch(getDocumentMovie())


    }, [])
    return (
        <>
            <div>
                <MovieRow movies={NetflixOriginal} title='Netflix Original' idSection='netflix' />
                <MovieRow movies={arrMovieTrending} title='Trending Movie' idSection='trending' />
                <MovieRow movies={arrMovieTop} title='Top Rated Movie' idSection='top' />

                <MovieRow movies={arrActionMovie} title='Action Movie' idSection='action' />
                <MovieRow movies={arrMovieComedy} title='Comedy Movie' idSection='comedy' />
                <MovieRow movies={arrMovieHornor} title='Hornor Movie' idSection='hornor' />
                <MovieRow movies={arrMovieRomance} title='Romance Movie' idSection='romance' />
                <MovieRow movies={arrMovieDocument} title='Documentaries Movie' idSection='document' />



            </div>
        </>
    );
}

export default Contents;
