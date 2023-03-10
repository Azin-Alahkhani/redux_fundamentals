import { Typography, Stack, Box, TextField, Button, Avatar, Divider } from "@mui/material"
import { useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Homepage = (props) => {
    const users = props.users
    
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userId, setUserId] = useState(users.length+1)
    const [error, setError] = useState(null)

  
console.log(users.length)
    const handleSubmit = (event) => {
        event.preventDefault()
        if (userName !== "" && userEmail !== "") {
            props.addUser(userName, userEmail, userId)
            setUserId(userId + 1)
            setUserEmail("")
            setUserName("")
        }
        else setError("fill this field")
    }
    console.log(users)
    return (
        <Box sx={{ color: 'text.secondary', backgroundColor: 'secondary.dark' }}>
            <Box marginBottom="space80"
                autoComplete="off">
                <Box marginBottom="space80" component="form"
                    alignItems="center" justifyContent="start"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        display: "flex"
                    }}>
                    <TextField
                        id="outlined-name"
                        margin="normal"
                        label="Enter Name"
                        value={userName}
                        required
                        error={error}
                        autoComplete="off"
                        type="email"
                        onChange={(e) => setUserName(e.target.value)}

                    />

                    <TextField
                        id="outlined-name"
                        label="Enter Email"
                        required
                        error={error}
                        margin="normal"
                        value={userEmail}
                        autoComplete="off"
                        onChange={(e) => setUserEmail(e.target.value)}

                    />
                    <Button type="submit"
                        variant="outlined" size="small"
                        sx={{ color: "black", height: 50, width: 50 }}
                        onClick={handleSubmit}
                    > Add User</Button>
                </Box>
            </Box>
            <Stack sx={{ backgroundColor: 'secondary.light', border: 1, borderRadius: 1, marginX: 1,marginY:1, paddingX: 1, paddingY: 1 }}
                direction="column"
                width="40vh"
                alignItems="flex-start"
                justifyContent="space-between"
                spacing={2} >

                <Typography variant="subtitle" fontSize={20} > your bottts </Typography>
                {/* <Divider variant="string"/> */}
                {users.map((user) => {
                    const img = 'https://avatars.dicebear.com/api/bottts/' + user.name + '.svg'
                    return (
                        <>
                            <Divider sx={{ width: '100%', height: '1' }} variant="string" flexItem />
                            <Stack key={user.id}
                                direction="row"
                                alignItems="flex-start"
                            // justifyContent="space-between"
                            >

                                <Avatar src={img}></Avatar>
                                <Stack direction="column"
                                    alignItems="flex-start"
                                    sx={{ marginX: 1 }}>
                                    <Typography variant="subtitle"> {user.name}</Typography>
                                    <Typography variant="subtitle"> {user.email}</Typography>
                                </Stack>
                            </Stack></>
                    )
                })}

            </Stack>

        </Box>

    )
}