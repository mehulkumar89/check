import { useLocation,useNavigate } from "react-router-dom"

function Image(){
  const {state}=useLocation()
  const navigate=useNavigate()
    return(
  
          <div className="newclass">
          <img src={state.image}></img>
          <h3 className="col">{state.title}</h3>
          <h3 className="col_1">{state.description}</h3>
          <button  onClick={()=>navigate(-1)}>GO TO DASHBOARD</button>
        </div>
    )
}
export default Image