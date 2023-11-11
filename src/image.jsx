import { useLocation,useNavigate } from "react-router-dom"

function Image(){
  const {state}=useLocation()
  const navigate=useNavigate()
  console.log(state)
    return(
        <>
        <div className="container1">
          <div className="child">
          <div className="img1">  
          <img src={state.image}></img>
           <button className="btn" onClick={()=>navigate(-1)}>GO TO DASHBOARD</button>
          </div>
          </div>
          <div className="subchild">
          <h3 className="col">{state.title}</h3>
          <h3 className="col_1">{state.description}</h3>
          </div>
        </div>
        </>
    )
}
export default Image