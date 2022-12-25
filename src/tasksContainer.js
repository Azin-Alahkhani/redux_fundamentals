import { connect } from "react-redux"
import { addTask, removeTask , updateTask } from "./redux/actionCreators"
import  Tasks  from "./tasks"

 const mapStateToProps =(state)=>{
    return {
        tasks: state.tasks
    }
 }
 const mapDispatchToProps =(dispatch)=>({
  addTask:(name,title,id)=> dispatch(addTask(name,title,id)),
  removeTask :(id) => dispatch(removeTask(id)),
   updateTask :(name,title,id) => dispatch(updateTask(name,title,id))

 })

 export const TaskContainer = connect(mapStateToProps,mapDispatchToProps)(Tasks)