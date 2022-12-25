import {ADD_TASK,ADD_USER,UPDATE_TASK,REMOVE_TASK} from './actionTypes'


export const addUser = (name)=>({type:ADD_USER, payload: name})

export const addTask = (title,name,id)=>({type:ADD_TASK, payload: {title,name,id}})

export const removeTask = (id)=>({type:REMOVE_TASK, payload:{id}})

export const updateTask = (name,title,id)=>({type:UPDATE_TASK, payload:{id,title,name}})
