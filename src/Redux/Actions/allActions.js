import { FETCH_MOVIES,FETCH_CHARACTERS, FETCH_MOVIE_DETAILS,FETCH_MOVIE_QUOTE, FETCH_CHAR_QUOTE, FETCH_CHAR_DETAILS, MOVIE_DATA_SORT, MOVIE_FILTER_DATA, CHARACTER_DATA_SORT, MOVIE_FILTER_DATA_EX } from "./index";
export const fetchMovies=(data)=>{
    return{
        type:FETCH_MOVIES,
        payload:data
    }
}
export const fetchCharacters=(data)=>{
    return{
        type:FETCH_CHARACTERS,
        payload:data
    }
}
export const fetchMovieDetails=(data)=>{
    return{
        type:FETCH_MOVIE_DETAILS,
        payload:data
    }
}
export const fetchMovieQuote=(data)=>{
    return{
        type:FETCH_MOVIE_QUOTE,
        payload:data
    }
}
export const fetchCharacterDetails=(data)=>{
    return{
        type:FETCH_CHAR_DETAILS,
        payload:data
    }
}
export const fetchCharQuote=(data)=>{
    return{
        type:FETCH_CHAR_QUOTE,
        payload:data
    }
}
export const movieDataSort=(data)=>{
    return{
        type:MOVIE_DATA_SORT,
        payload:data
    }
}
export const movieFilterData=(data)=>{
    return{
        type:MOVIE_FILTER_DATA,
        payload:data
    }
}
export const characterDataSort=(data)=>{
    return{
        type:CHARACTER_DATA_SORT,
        payload:data
    }
}
export const movieFilterDataEx=(data)=>{
    return{
        type:MOVIE_FILTER_DATA_EX,
        payload:data
    }
}