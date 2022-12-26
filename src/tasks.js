import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input, Stack } from '@mui/material';
import { TaskCard } from './taskCard'
import { SimpleForm } from './simpleForm';

function Tasks(props) {
    const recTasks = props.tasks

    const [id, setId] = useState(3)
    const boxTheme = {
        // width: 500,
        height: 300,
        // backgroundColor: 'primary.dark',
        display: "flex", alignItems: "center", justifyContent: "center",
    }
    const cardTheme = {
        width: 130,
        height: 200,
        margin: "10px",
        borderRadius: "10px",
        boxShadow: "1px 1px 1px ",
        backgroundColor: 'primary.dark',

    }
    const handleSubmit = (taskName, taskTitle) => {
        console.log(taskName, taskTitle)
        props.addTask(taskTitle, taskName, id)
        setId(id + 1)
    }
    const handleUpdate = (name, title, id) => {
        console.log(name + " do " + title)
        props.updateTask(name, title, id)
    }

    return (
        <Stack
            sx={{ backgroundColor: 'secondary.main'  }}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            flexGrow={1}
            spacing={2} >
            <SimpleForm handleSubmit={handleSubmit} handleUpdate={handleUpdate} task={{ name: "", title: "" }}></SimpleForm>
            <Box sx={boxTheme} >
                {recTasks.map((item) => {
                    return <TaskCard key={item.id} task={item} onRemove={props.removeTask} updateTask={props.updateTask}></TaskCard>
                })}
            </Box>
        </Stack>
    )

}


export default Tasks