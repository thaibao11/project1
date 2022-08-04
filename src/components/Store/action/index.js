import axios from 'axios';
import { MdOutlineDriveEta } from 'react-icons/md';
import { GET_MOVIE_HORNOR, GET_MOVIE_TOP, GET_NETFLIX_ORIGINALS, GET_TRENDING_MOVIE, GET_MOVIE_ACTION, GET_MOVIE_ROMANCE, GET_MOVIE_COMEDY, GET_MOVIE_DOCUMENT } from '../reducers/type';

const API_KEY = 'c6da6ec1e3609c0a9d6d5540cb86d96c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetFlixOriginal = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        )


        dispatch({
            type: GET_NETFLIX_ORIGINALS,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response)
    }
}

export const getTrendingMovie = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
        )


        dispatch({
            type: GET_TRENDING_MOVIE,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}

export const getMovieTop = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        )

        dispatch({
            type: GET_MOVIE_TOP,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}

export const getHornorMovie = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        )
        console.log(result)

        dispatch({
            type: GET_MOVIE_HORNOR,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}

export const getActionMovie = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false`
        )
        console.log(result)

        dispatch({
            type: GET_MOVIE_ACTION,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}

export const getRomanceMovie = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        )
        console.log(result)

        dispatch({
            type: GET_MOVIE_ROMANCE,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}

export const getComedyMovie = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        )
        console.log(result)

        dispatch({
            type: GET_MOVIE_COMEDY,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}

export const getDocumentMovie = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
        )
        console.log(result)

        dispatch({
            type: GET_MOVIE_DOCUMENT,
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}


export const getMovieDetail = (movie) => dispatch => {
    dispatch({
        type: 'GET_MOVIE_DETAIL',
        action: movie
    })
}



export const searchMovie = (keywords) => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        )
        console.log(result)

        dispatch({
            type: 'SEARCH_MOVIE',
            action: result.data.results
        })
    } catch (err) {
        console.log(err.response.data)
    }
}