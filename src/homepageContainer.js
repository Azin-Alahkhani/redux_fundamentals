import { connect } from "react-redux"
import { addUser, removeUser  } from "./redux/actionCreators"
import  {Homepage}  from "./homepage"

 const mapStateToProps =(state)=>{
    return {
        users: state.users
    }
 }
 const mapDispatchToProps =(dispatch)=>({
  addUser:(name,email,id)=> dispatch(addUser(name,email,id)),
  removeUser :(id) => dispatch(removeUser(id)),

 })

 export const HomepageContainer = connect(mapStateToProps,mapDispatchToProps)(Homepage)