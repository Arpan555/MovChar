import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { requestFetchCharacters,requestFetchCharacterBySort } from '../Thunk'
import ReactPaginate from 'react-paginate'
import { useHistory ,Link} from 'react-router-dom'
const Characters = () => {
    const[sort,setSort]=useState("asc")
    const[pageNumber,setPageNumber]=useState(0)
    const dispatch=useDispatch()
    const history=useHistory()
    const characterData=useSelector(state=>state.reducer.characters)
    const total=useSelector(state=>state.reducer.totalChar)
    useEffect(() => {
       dispatch(requestFetchCharacters())
    }, [dispatch])
    const handleSort=()=>{
        if(sort==="asc") 
        {
            setSort("desc")
        }
        else
        {
            setSort("asc")
        } 
    }
    useEffect(()=>{
        dispatch(requestFetchCharacterBySort(sort))
    },[dispatch,sort])
    const charPerPage=100
    const pagesVisited=pageNumber * charPerPage
    const displayChars=characterData.slice(pagesVisited,pagesVisited+charPerPage)
    .map(data=>
        <div className="movie-box">
              <Link to={`/characters/${data._id}`}>
                <h1>Name:{data.name}</h1>
              </Link>
        </div> )
    const pageCount=Math.ceil(total/charPerPage)
    const changePage=({selected})=>{
        setPageNumber(selected)
    }
    return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Back To Home" onClick={()=>history.push("/")}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" className="btn btn-secondary" value="Sort" onClick={handleSort}/>
                <h1>characters</h1>
                    {displayChars}<br/><br/>
                    <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    />
            </center>
        </div>
    )
}

export default Characters
