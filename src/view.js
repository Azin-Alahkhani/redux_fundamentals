// import { Button } from "@mui/material"
import { useState } from "react"
import {  useSelector } from "react-redux"
import { useActions } from './use-actions'
import { addUser } from './redux/actionCreators'

export const View = () => {

    const users = useSelector(state => state.users)
    //   const dispatch = useDispatch()
    // const add =()=> {dispatch(addUser(user))} instead use use-actions.js to bind all actions to dispatch in 'actions'
    const actions = useActions({ addUser })
    const [user, setUser] = useState("")

    return (
        <>
            {users.map(item => <div key={item.name}>{item.name}</div>)}
            <section>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        actions.addUser(user)
                        setUser("")
                    }}>
                    <label >enter name</label>
                    <input value={user} onChange={(event) => setUser(event.target.value)} />
                    <input type="submit" />

                </form>
            </section>
            {/* <Button variant="outlined" color="secondary" onClick={add } >add user</Button> */}

        </>
    )
}