import { useLocation,useNavigate } from "react-router-dom"

function Image(){
  const {state}=useLocation()
  const navigate=useNavigate()
  console.log(state)
    return(
        <>
        <div className="container">
          <div className="child">
          <div>  
          <img src={state.url}></img>
           <button className="btn" onClick={()=>navigate(-1)}>GO TO DASHBOARD</button>
          </div>
          </div>
          <div className="subchild">
          <h2>{state.name}</h2>
          <h3>{state.description}</h3>
          </div>
        </div>
        </>
    )
}
export default Image