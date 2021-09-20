import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history=useHistory()
  return (
    <div>
      <center>
        <input type="button" className="btn btn-primary" value="Movie" onClick={()=> history.push("/movies")}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" className="btn btn-primary" value="Characters" onClick={()=> history.push("/characters")}/>
      </center>
    </div>
  );
};
export default Home;
