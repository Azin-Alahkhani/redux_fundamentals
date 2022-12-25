
export const monitorEnhancer = (storeCreator) => (reducer, initialState, enhancer) => {
    console.log("inside enhancer")
    const monitorReducer = (state, action) => {
        console.log("old state" + state + " /at: " + performance.now() + " /action: " + action)
        const newState = reducer(state, action)
        console.log("new state" + state + " /at: " + performance.now() + " /action: " + action)
        return newState
    }
    return storeCreator(monitorReducer, initialState, enhancer)
}
 export const devToolEnhancer = 
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
