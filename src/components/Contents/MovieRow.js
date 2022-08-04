import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SmoothHorizontalScrolling } from '../../ulti';
import { useViewport } from '../hooks';
import { getMovieDetail } from '../Store/action';
import { useDispatch } from 'react-redux';

const MovieRow = (props) => {
    const { movies, title, idSection } = props;
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();

    const handleMovieDetail = (movie) => {
        dispatch(getMovieDetail(movie))
    }
    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {

            SmoothHorizontalScrolling(sliderRef.current, 350, movieRef.current.clientWidth * 2, sliderRef.current.scrollLeft)
        }
    }

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(sliderRef.current, 350, -movieRef.current.clientWidth * 2, sliderRef.current.scrollLeft)

        }
    }

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag]);
    const onDragStart = e => {
        setIsDrag(true);
        setDragDown(e.screenX);
    }

    const onDragEnd = e => {
        setIsDrag(false);
    }

    const onDragEnter = e => {
        setDragMove(e.screenX);
    }
    return (
        <MoviesRowContainer draggable='false' id={idSection}>
            <h1 className='heading'>{title}</h1>
            <MoviesSlider ref={sliderRef} draggable='true'
                onDragStart={onDragStart} onDragEnd={onDragEnd} onDragEnter={onDragEnter}

                style={movies && movies.length > 0 ? { gridTemplateColumns: `repeat(${movies.length}, ${windowWidth > 1200 ? '360px' : windowWidth > 992 ? '300px' : windowWidth > 768 ? '250px' : '200px'})` } : {}}
            >
                {movies.map((movie, index) => {
                    return (
                        <>
                            <div key={index} className="movieItem" ref={movieRef} draggable="false" onClick={() => handleMovieDetail(movie)}>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" draggable="false" />
                                <div className='movieName'>{movie.name}</div>
                            </div>

                        </>
                    )
                })}
            </MoviesSlider>
            <div className='btn-left' onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className='btn-right' onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </MoviesRowContainer>
    );
}

export default MovieRow;

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%
    .heading {
        font-size: 18px;
        
    }
    .btn-left {
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
       transform: translateY(-20%);
       &:hover {
        background-color: rgba(0,0,0,0.8);
       }

       &:hover svg {
        opacity: 1;
        transform: scale(1.2);
       }
       svg {
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
       }
    }
    .btn-right {
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
       transform: translateY(-20%);
       &:hover {
        background-color: rgba(0,0,0,0.8);
       }

       &:hover svg {
        opacity: 1;
        transform: scale(1.2);
       }
       svg {
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
       }
    }
`


const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;

    transition: all 0.3s linear;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;
    &:hover .movieItem {
        opacity: 0.5;
    }

    
    .movieItem {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;

        &:hover {
            transform: scale(1.1);
            z-index: 10;
            opacity: 1;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .movieName {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center;
            font-size: 14px;
            background-color: rgba(0,0,0,0.7);
        }
    }
`