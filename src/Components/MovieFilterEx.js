import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { requestFetchFilterMovieEx } from '../Thunk'
import { useHistory,Link } from 'react-router-dom'
const MovieFilterEx = () => {
    const [form,setForm]=useState({
        budgetSearch:"",
        awardSearch:"",
        runtimeSearch:""
    })
    const history=useHistory()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let {name,value}=e.target
        setForm({...form,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(requestFetchFilterMovieEx(form))
        setForm({budgetSearch:"",awardSearch:"",runtimeSearch:""})
    }
    const filterData= useSelector(state => state.reducer.filterMovie)
    return (
        <div>
            <center>
                <input type="button" Value="Back To Home" className="btn btn-primary" onClick={()=>history.push("/")} /> <br/>
                    <h2>Filter Movie</h2>
                <form className="form-" onSubmit={handleSubmit}><br/><br/>
                    <label>Search By Budget (in Million)</label>
                    <input type="number" name="budgetSearch" value={form.budgetSearch} onChange={handleChange}/><br/><br/>
                    <label>Search By Award</label>
                    <input type="number" name="awardSearch" value={form.awardSearch} onChange={handleChange}/><br/><br/>
                    <label>Search By Run Time(in Minutes)</label>
                    <input type="number" name="runtimeSearch" value={form.runtimeSearch} onChange={handleChange}/><br/><br/>
                    <input type="submit" className="btn btn-primary" value ="Filter" />
                </form><br/><br/>
                {filterData.length>0 ?
                filterData.map(data =>
                    <div className="movie-box">
                        <Link to={`/movies/${data._id}`}>
                            <h3>Movie:{data.name}</h3>
                            <h3>ID:{data._id}</h3>
                        </Link>
                    </div>):"No Record"}
            </center>
        </div>
    )
}
export default MovieFilterEx
