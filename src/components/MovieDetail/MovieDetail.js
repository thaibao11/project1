import React from 'react';
import styled, { keyframes } from 'styled-components'
import { useDispatch } from 'react-redux';
import { getMovieDetail } from '../Store/action';
import moment from 'moment'

// const showModal = false;
const MovieDetail = (props) => {
    const { movie, showModal } = props
    console.log(movie)
    const link = movie?.backdrop_path || movie?.poster_path
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(getMovieDetail(null))
    }
    return (
        <MovieDetailModal>
            <div className={`backdrop ${showModal ? 'showBackdrop' : 'hideBackdrop'}`} onClick={handleCloseModal}>

            </div>
            <div className={`modal ${showModal ? 'showModal' : 'hideModal'}`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${link})`, backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="movieInfo">
                        <h1 className='movieTitle'>{movie?.name || movie?.title}</h1>
                        <div className='statistical'>
                            <p className='rating'>Rating: {Math.round(movie?.vote_average * 10)}%</p>
                            <br />

                            <p className='popularty'>Popularty: {movie?.popularity}</p>
                        </div>
                        <p className='releaseDate'>Release Date:  {moment(movie?.release_date).format('DD/MM/YYYY') || moment(movie?.first_air_date).format('DD/MM/YYYY')}</p>
                        <p className='overview'>{movie?.overview}</p>
                    </div>
                </div>
            </div>
        </MovieDetailModal>
    );
}

export default MovieDetail;
const fadein = keyframes`
    0%: {background: rgba(0,0,0,0)}
    100%:{ background: rgba(0,0,0,0.6)}
`
const MovieDetailModal = styled.div`
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background-color: rgba(0,0,0,0.6);
        animation: ${fadein} 1s cubic-bezier(0.17,0.85,0.45,1) forwards;
    }

    .showBackdrop {
        display:block;

    }

    .hideBackdrop {
        display: none;
    }
    .modal {
        position: fixed;
        top: 25%;
        left: 0;
        z-index: 300;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        color:  rgb(92,223,92);
        box-shadow: 0 15px 40px rgba(rgb(23,24,24), 0.2);
        transition: all  0.3s ease;

        @media screen and (max-width: 1184px) {
            height: 70%;
        }

        @media screen and (max-width: 600px) {
            height: 80%;
        }

        .container {
            position: relative;
            width: 70%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0,0,0,0.94) 60%, transparent);
            

        }

        @media screen and (max-width: 1184px) {
            background: linear-gradient(90deg, rgba(0,0,0,0.94) 40%, rgba(0,0,0,0.733), transparent);
            width: 88%;
        }
        @media screen and (max-width: 980px) {
            background: linear-gradient(90deg, rgba(0,0,0,0.94) 50%, rgba(0,0,0,0.733), transparent);
            width: 100%;
        }
        @media screen and (max-width: 600px) {
            background: linear-gradient(90deg, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.733), transparent);
           
        }

        .movieInfo {
            width: 65%;
            height: 100%;
            padding-left: 24px;
            color: white;
            font-size: 20px;
            padding-top: 30px;
            @media screen and (max-width: 600px){
                font-size: 16px;
                width: 88%;
            }

            .movieTitle {
                margin-top: 30px;
            }

            .statistical {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                .rating {
                    color: green;

                }
                .popularity {
                    color: yellow;
                    margin-left: 12px;
                }
            }

            .releaseDate {
                margin-top: 12px;
            }

            .overview {
                margin-top: 20px;
                color: rgba(255,255,255,0.6);
                line-height: 1.4;
                font-size: 18px;
                @media screen and (max-width: 600px){
                    font-size: 14px;
                   
                }
            }
        }


    }

    .showModal {
        top:  25%;
        opacity: 1;
        left: 0;
        visibility: visible;
        trasition: 0.3s ease-in-out;
    }

    .hideModal {
        top: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
    }
`