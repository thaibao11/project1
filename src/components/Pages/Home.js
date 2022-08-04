import React, { useState, useEffect } from 'react';
import SearchMovie from '../SearchMovie/SearchMovie'
import Contents from '../Contents/Contents';
import Intro from '../Intro/Intro';
import Menu from '../Menu/Menu';
import MovieDetail from '../MovieDetail/MovieDetail';
import { useSelector } from 'react-redux';

const Home = () => {
    const movieDetail = useSelector(state => state.initState.MovieDetail);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

    useEffect(() => {
        setIsShowMovieDetail(movieDetail ? true : false)
    }, [movieDetail])
    return (
        <>

            <Intro />
            <Contents />
            <Menu />
            <MovieDetail movie={movieDetail} showModal={isShowMovieDetail} />

        </>
    );
}

export default Home;
