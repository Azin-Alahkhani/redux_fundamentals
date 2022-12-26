import {ADD_TASK,ADD_USER,UPDATE_TASK,REMOVE_TASK, REMOVE_USER} from './actionTypes'


export const addUser = (name,email,id)=>({type:ADD_USER, payload: {name,email,id}})

export const removeUser = (id)=>({type:REMOVE_USER, payload: {id}})


export const addTask = (title,name,id)=>({type:ADD_TASK, payload: {title,name,id}})

export const removeTask = (id)=>({type:REMOVE_TASK, payload:{id}})

export const updateTask = (name,title,id)=>({type:UPDATE_TASK, payload:{id,title,name}})
