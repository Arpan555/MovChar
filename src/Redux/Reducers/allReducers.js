import { FETCH_CHARACTERS, FETCH_CHAR_DETAILS, FETCH_MOVIES, FETCH_MOVIE_DETAILS, FETCH_MOVIE_QUOTE,FETCH_CHAR_QUOTE,MOVIE_DATA_SORT, MOVIE_FILTER_DATA, CHARACTER_DATA_SORT, MOVIE_FILTER_DATA_EX } from "../Actions/index";
const initialState={
    movies:[],
    filterMovie:[],
    totalMov:[],
    selectMovie:[],
    selectMovieQuote:[],
    characters:[],
    selectCharacter:[],
    selectCharQuote:[],
    totalChar:[]
}
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload.docs,
                totalMov:action.payload.total
            }
        case FETCH_CHARACTERS:
            return{
                ...state,
                characters:action.payload.docs,
                totalChar:action.payload.total
            }
        case FETCH_MOVIE_DETAILS:
            return{
                ...state,
                selectMovie:action.payload.docs
            }
        case FETCH_MOVIE_QUOTE:
            return{
                ...state,
                selectMovieQuote:action.payload.docs
        
            }
        case FETCH_CHAR_DETAILS:
            return{
                ...state,
                selectCharacter:action.payload.docs
            }
        case FETCH_CHAR_QUOTE:
            return{
                ...state,
                selectCharQuote:action.payload.docs
            }
        case MOVIE_DATA_SORT:
            return{
                ...state,
                movies:action.payload.docs
            }
        case MOVIE_FILTER_DATA:
            return{
                ...state,
                filterMovie:action.payload.docs
            }
        case CHARACTER_DATA_SORT:
            return{
                ...state,
                characters:action.payload.docs
            }
        case MOVIE_FILTER_DATA_EX:
            return{
                ...state,
                filterMovie:action.payload.docs
            }
        default:
            return state
    }
}
export default reducer