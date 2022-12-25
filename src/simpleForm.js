import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from 'react';


export const SimpleForm = ({ handleSubmit,  task, close}) => {
    const update =!( task.title ==="")
    const [taskTitle, setTaskTitle] = useState(task.title)
    const [taskName, setTaskName] = useState(task.name)
    const handleSubmitForm = (event) => {
        event.preventDefault()
        if(update) handleSubmit(taskName, taskTitle,task.id)
        else handleSubmit(taskName, taskTitle)
        setTaskName("")
        setTaskTitle("")
        if(close){
         close()
        }
    }

    
    return (
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
                    label="Task"
                    value={taskTitle}
                    autoComplete="off"
                    onChange={(e) => setTaskTitle(e.target.value)}

                />

                <TextField
                    id="outlined-name"
                    label="Name"
                    margin="normal"
                    value={taskName}
                    autoComplete="off"
                    onChange={(e) => setTaskName(e.target.value)}

                />
                <Button type="submit"
                    variant="outlined" size="small"
                    sx={{ color: "black", height: 50, width: 50 }}
                    onClick={handleSubmitForm}
                >{update  ? "update task" : "Add task"}</Button>
            </Box>
        </Box>
    )
}