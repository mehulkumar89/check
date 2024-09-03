import { useLocation,useNavigate } from "react-router-dom"

function Image(){
  const {state}=useLocation()
  const navigate=useNavigate()
    return(
          <>
        <div className="newclass">
          <img src={state.image}></img>
          <div>
          <h3> {state.title} </h3>
          <h3> {state.description} </h3>
        </div>
        <button  onClick={()=>navigate(-1)}>Prev</button>
        </div>
        </>
    )
}
export default Image