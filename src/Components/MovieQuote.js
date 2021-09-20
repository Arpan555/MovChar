import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams,useHistory } from 'react-router-dom'
import { requestMovieQuotes } from '../Thunk'

const MovieQuote = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const {id}=useParams()
    const quotesData=useSelector(state=>state.reducer.selectMovieQuote)
    useEffect(() => {
       dispatch(requestMovieQuotes(id))
    }, [dispatch])
    return (
        <div>
           <center>
               <input type="button" className="btn btn-primary" value="Back To Home" onClick={()=>history.push("/")} />
               <div>
                    <h1>Dialog</h1>
                    {quotesData && quotesData.length===0? <p className="p-box">Not Record Found</p> 
                    : quotesData.map(data=>
                    <>
                    <p className="p-box">{data.dialog}</p>
                    </>)}
               </div>
           </center>
        </div>
    )
}

export default MovieQuote
