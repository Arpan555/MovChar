import axios from "axios"
import { fetchCharacters, fetchMovies,fetchMovieDetails,fetchMovieQuote,fetchCharQuote
    ,fetchCharacterDetails,movieDataSort,movieFilterData,characterDataSort,movieFilterDataEx } from "./Redux/Actions/allActions"
const request=axios.create({
    baseURL:"https://the-one-api.dev/v2",
    headers:{
        "Content-type":"application/json",
        "Authorization":"Bearer po4cbd6v41tXxZTW4fP-"
    }
})
export const requestFetchMovies=()=>{
    return async(dispatch)=>{
        try {
            const movieData=await request.get(`/movie`)
            dispatch(fetchMovies(movieData.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestFetchCharacters=()=>{
    return async(dispatch)=>{
        try {
            const characterData=await request.get(`/character`)
            dispatch(fetchCharacters(characterData.data))
            
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestMovieDetails=(id)=>{
    return async(dispatch)=>{
        
        try {
            const movieDetails=await request.get(`/movie/${id}`)
            dispatch(fetchMovieDetails(movieDetails.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestMovieQuotes=(id)=>{
    return async(dispatch)=>{
        try {
            const quoteData=await request.get(`/movie/${id}/quote`)
            dispatch(fetchMovieQuote(quoteData.data))
        } catch (error) {
            
        }
    }
}
export const requestCharacterDetails=(id)=>{
    return async(dispatch)=>{
        
        try {
            const characterDetails=await request.get(`/character/${id}`)
            dispatch(fetchCharacterDetails(characterDetails.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const requestFetchCharactersQuote=(id)=>{
    return async(dispatch)=>{
        try {
            const quoteData=await request.get(`/character/${id}/quote`)
            dispatch(fetchCharQuote(quoteData.data))
        } catch (error) {
            console.log(error)
            
        }
    }
}
export const requestFetchMoviesBySort=(sort)=>{
    return async(dispatch)=>{
        try {
            const sortData=await request.get(`/movie/?sort=name:${sort}`)  
            dispatch(movieDataSort(sortData.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestFetchCharacterBySort=(sort)=>{
    return async(dispatch)=>{
        try {
            const sortData=await request.get(`/character/?sort=name:${sort}`)
            dispatch(characterDataSort(sortData.data))
        } catch (error) {
            
        }
    }
}
export const requestFetchFilterMovie=(state)=>{
    return async(dispatch)=>{
        const {budgetSearch,awardSearch,runtimeSearch }=state
        try {
            const filterData=await request.get(`/movie?budgetInMillions>=${budgetSearch}&academyAwardWins>=${awardSearch}&runtimeInMinutes>=${runtimeSearch}`)
            dispatch(movieFilterData(filterData.data))
        }catch (error) {
            console.log(error)
        }
    }
}
export const requestFetchFilterMovieEx=(state)=>{
    return async(dispatch)=>{
        const {budgetSearch,awardSearch,runtimeSearch }=state
        try {
            const filterData=await request.get(`/movie?budgetInMillions!=${budgetSearch}&academyAwardWins!=${awardSearch}&runtimeInMinutes!=${runtimeSearch}`)
            dispatch(movieFilterDataEx(filterData.data))
        }catch (error) {
            console.log(error)
        }
    }
}