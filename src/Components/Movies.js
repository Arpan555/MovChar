import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestFetchMovies,requestFetchMoviesBySort} from '../Thunk'
import { Link,useHistory } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import "./Style.css"
const Movies = () => {
    const[pageNumber,setPageNumber]=useState(0)
    const[sort,setSort]=useState("asc")
    const [form,setForm]=useState({
        nameSearch:"",
        budgetSearch:"",
        awardSearch:"",
        runtimeSearch:""
    })
    const history=useHistory()
    const dispatch = useDispatch()
    const total=useSelector(state=>state.reducer.totalMov)
    const movieData=useSelector(state=>state.reducer.movies)
    useEffect(() => {
        dispatch(requestFetchMovies())
      }, [dispatch])
    useEffect(()=>{
        dispatch(requestFetchMoviesBySort(sort))
    },[dispatch,sort])  
    const handleSort=()=>{
        if(sort==="asc") setSort("desc")
        else setSort("asc")
    }
    const movPerPage=2
    const pagesVisited=pageNumber * movPerPage
    const displayMov=movieData.slice(pagesVisited,pagesVisited+movPerPage).map(data=>
        <div className="movie-box">
                <Link to={`/movies/${data._id}`}>
                    <h3>Movie:{data.name}</h3>
                    <h3>ID:{data._id}</h3>
                </Link>
        </div>)
    const pageCount=Math.ceil(total/movPerPage)
    const changePage=({selected})=>{
        setPageNumber(selected)
    }
    return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Back To Home" onClick={()=>history.push("/")}/>&nbsp;&nbsp;&nbsp;
                <input type="button" className="btn btn-secondary" value="Sort" onClick={handleSort}/>&nbsp;&nbsp;&nbsp;
                <input type="button" className="btn btn-success" value="Filter +" onClick={()=>history.push("/moviefilter")}/>&nbsp;&nbsp;&nbsp;
                <input type="button" className="btn btn-success" value="Filter -" onClick={()=>history.push("/moviefilterex")}/>
                <h1>Movie</h1><br/>
                {displayMov}<br/><br/>
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
export default Movies

