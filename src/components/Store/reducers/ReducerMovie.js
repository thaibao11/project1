import { GET_NETFLIX_ORIGINALS, GET_TRENDING_MOVIE, GET_MOVIE_TOP, GET_MOVIE_ACTION, GET_MOVIE_HORNOR, GET_MOVIE_DOCUMENT, GET_MOVIE_ROMANCE, GET_MOVIE_COMEDY } from "./type"

const initState = {
    arrMovieOriginal: [],
    arrMovieTrending: [],
    arrMovieTop: [],
    arrMovieAction: [],
    arrMovieHornor: [],
    arrMovieRomance: [],
    arrMovieDocument: [],
    arrMovieComedy: [],
    MovieDetail: null,
    arrSearch: [],
}

export const ReducerMovie = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_NETFLIX_ORIGINALS: {

            return { ...state, arrMovieOriginal: action.action }

        }

        case GET_TRENDING_MOVIE: {
            return { ...state, arrMovieTrending: action.action }
        }

        case GET_MOVIE_TOP: {
            return { ...state, arrMovieTop: action.action }
        }
        case GET_MOVIE_HORNOR: {
            console.log('ec')
            return { ...state, arrMovieHornor: action.action }
        }
        case GET_MOVIE_ACTION: {
            return { ...state, arrMovieAction: action.action }
        }
        case GET_MOVIE_ROMANCE: {
            return { ...state, arrMovieRomance: action.action }
        }
        case GET_MOVIE_COMEDY: {
            return { ...state, arrMovieComedy: action.action }
        }
        case GET_MOVIE_DOCUMENT: {
            return { ...state, arrMovieDocument: action.action }
        }
        case 'GET_MOVIE_DETAIL': {
            console.log('get')
            return { ...state, MovieDetail: action.action }
        }

        case 'SEARCH_MOVIE': {
            console.log('get121')
            return { ...state, arrSearch: action.action }
        }
        default:
            return state

    }

    return { ...state }
}