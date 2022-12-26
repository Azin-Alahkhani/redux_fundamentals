import { combineReducers } from 'redux'
import produce from 'immer'


import { initialState } from './initialState'
import { ADD_TASK, ADD_USER, REMOVE_USER ,REMOVE_TASK, UPDATE_TASK} from './actionTypes'

const userReducer =produce( (users = initialState.users, action) => {
  console.log(action.payload)
  if (action.type === ADD_USER)
    users.push(action.payload)
  if(action.type=== REMOVE_USER)
    users.filter(user => user.id == action.payload.id)
  return users
})
const taskReducer = produce((tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK)
   {
     tasks.push(action.payload)
    console.log(action.payload)
    // return [...tasks, action.payload]
  }
  if (action.type === REMOVE_TASK)
  {  console.log(action.payload)
      return tasks.filter(task => task.id !== action.payload.id)}
  if (action.type === UPDATE_TASK)
   {
    console.log(action.payload)
    const updateTask = tasks.find((task) => task.id === action.payload.id)
    console.log(updateTask)
    updateTask.name = action.payload.name
    updateTask.title = action.payload.title
      }
  return tasks
})


export const reducer = combineReducers({ users: userReducer, tasks: taskReducer })