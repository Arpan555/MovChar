import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams,useHistory } from 'react-router-dom'
import { requestFetchCharactersQuote } from '../Thunk'
const CharactersQuote = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const {id}=useParams()
    const quoteData=useSelector(state=>state.reducer.selectCharQuote)
    useEffect(() => {
       dispatch(requestFetchCharactersQuote(id))
    }, [dispatch,id])
    return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Back To Home" onClick={()=>history.push("/")}/>
                {quoteData && quoteData.length===0 ?
                    <p className="p-box">no record found</p> : quoteData.map(data=>
                        <>
                        <div className="movie-box">
                            <p className="p-box">Dialog:{data.dialog}</p>
                        </div> 
                        </>
                )}
            </center>
        </div>
    )
}
export default CharactersQuote
