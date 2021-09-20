import React,{useEffect} from 'react'
import { useParams ,useHistory} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { requestMovieDetails} from '../Thunk'
const MovieDetails = () => {
    const dispatch= useDispatch()
    const {id}=useParams()
    const history=useHistory()
    const selectMovie=useSelector(state=>state.reducer.selectMovie)
    useEffect(() => {
       dispatch(requestMovieDetails(id))
    }, [dispatch,id])
    return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Back To Home" onClick={()=>history.push("/")}/>
                <h1>MovieDetails</h1>
                {selectMovie &&
                    selectMovie.map(data=>
                    <>
                    <div className="movie-box">
                        <h1>Name:{data.name}</h1>
                        <h3>ID:{data._id}</h3>
                        <h4>Academy Award Nominations:{data.academyAwardNominations}</h4>
                        <h4>Revenue in Million:{data.boxOfficeRevenueInMillions}</h4>
                        <h4>Budget in Million:{data.budgetInMillions}</h4>
                        <h4>Score:{data.rottenTomatoesScore}</h4>
                        <h4>RunTime:{data.runtimeInMinutes}</h4>
                        <input type="button" value="Quotes" onClick={()=> history.push(`/movies/${id}/quotes`)}/>
                    </div>
                </>)}
            </center>
        </div>
    )
}
export default MovieDetails
