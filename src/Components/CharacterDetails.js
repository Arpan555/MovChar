import React,{useEffect} from 'react'
import { useParams ,useHistory} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { requestCharacterDetails} from '../Thunk'
const CharactersDetails = () => {
    const dispatch= useDispatch()
    const {id}=useParams()
    const history=useHistory()
    const selectCharacter=useSelector(state=>state.reducer.selectCharacter)
    useEffect(() => {
       dispatch(requestCharacterDetails(id))
    }, [dispatch])
    return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Back To Home" onClick={()=>history.push("/")}/>
                <h1>Character Details</h1>
                {selectCharacter &&
                selectCharacter.map(data=>
                <>
                <div className="movie-box">
                    <p>Name:{data.name}</p>
                    <p>ID:{data._id}</p>
                    <p>wikiUrl:{data.wikiUrl}</p>
                    <input type="button" value="Quotes" onClick={()=> history.push(`/characters/${id}/quotes`)}/>
                </div>
                </>)}
            </center>
        </div>
    )
}
export default CharactersDetails
