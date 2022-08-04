import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useViewport } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../Store/action';
const movieList = [
    'https://image.tmdb.org/t/p/original/ccaZ3yyyC6rcMAQrlLZ51FpahNO.jpg',
    'https://image.tmdb.org/t/p/original/ccaZ3yyyC6rcMAQrlLZ51FpahNO.jpg',
    'https://image.tmdb.org/t/p/original/ccaZ3yyyC6rcMAQrlLZ51FpahNO.jpg',
    'https://image.tmdb.org/t/p/original/ccaZ3yyyC6rcMAQrlLZ51FpahNO.jpg',
    'https://image.tmdb.org/t/p/original/ccaZ3yyyC6rcMAQrlLZ51FpahNO.jpg',
    'https://image.tmdb.org/t/p/original/ccaZ3yyyC6rcMAQrlLZ51FpahNO.jpg'
]
const useQuery = () => new URLSearchParams(useLocation().search)
const SearchMovie = () => {
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const arrSearch = useSelector(state => state.initState.arrSearch)
    const keywords = useQuery().get('keywords')
    console.log(keywords)
    useEffect(() => {
        if (keywords) { dispatch(searchMovie(keywords)) }
    }, [keywords, dispatch])

    console.log(arrSearch);
    return (
        <>
            <SearchPane>
                {arrSearch && arrSearch.length > 0 ? (
                    <div className='searchContent' style={{ gridTemplateColumns: `repeat(${windowWidth > 1200 ? 5 : windowWidth > 992 ? 4 : windowWidth > 768 ? 3 : windowWidth > 600 ? 2 : 1}, auto)` }}>
                        {arrSearch.map((movie, index) => {
                            return (
                                <>
                                    <div className="movieItem" key={index}>
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt="123" />
                                        <span>{movie.name || movie.title}</span>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                ) : (
                    <Nofound>
                        <h1>No Found</h1>
                    </Nofound>
                )}
            </SearchPane>
        </>
    );
}

export default SearchMovie;

const Nofound = styled.div`
    padding: 5rem 8rem;
    color: white
`
const SearchPane = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background: black;
    transition: all 0.3s linear;

    .searchContent {
        padding: 40px 60px;
        display: grid;
        gap: 8px;

        &:hover movieItem {
            opacity: 0.7;
        }

        .movieItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            margin: 20px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.2);
                z-index: 10;
                opacity: 1;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                padding: 4px;
                background: rgba(0,0,0,0.5);
                color: white;

            }
        }
    }

`