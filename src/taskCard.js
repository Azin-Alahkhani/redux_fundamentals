import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  Stack } from '@mui/material';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';import Modal from '@mui/material/Modal';
import { SimpleForm } from './simpleForm';


export const TaskCard = ({ task, onRemove ,updateTask}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const id = task.id
    // console.log(id)
    const cardTheme = {
        width: 130,
        height: 250,
        margin: "10px",
        borderRadius: "10px",
        // boxShadow: "1px 1px 1px ",
        backgroundColor: 'primary.light',

    }
    const modalTheme = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'secondary.dark',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const handleRemove = () => {
        console.log(id)
        onRemove(id)
    }
    const handleUpdate = (name,title,id) => {
        console.log(name+" do "+title)
        updateTask(name,title,id)
    }

    return (
        <Card sx={cardTheme} variant="outlined" display="flex">
            <Stack direction="column" spacing={2} alignItems="center">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="subtitle" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Task
                        </Typography>
                        <Typography variant="subtitle" component="div">
                            {task.title}
                        </Typography>

                        <Typography variant="subtitle02">
                            for: {task.name}
                        </Typography>
                    </CardContent>

                    <Fab color="primary" aria-label="edit"                        
                    sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                        onClick={handleRemove}
                    ><RemoveIcon /></Fab>
                    <Fab color="primary" aria-label="edit"
                        sx={{
                            color: 'text.primary',
                            '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                        onClick={handleOpen}
                    > <EditIcon /></Fab>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalTheme}>
                        <SimpleForm close={handleClose} handleSubmit={handleUpdate} task={task}></SimpleForm></Box>
                        {/* <CircularProgress color="inherit" /> */}
                    </Modal>


                </React.Fragment></Stack>
        </Card>
    )
}

function MediaCard(task) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Task
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {task.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">remove</Button>
                <Button size="small">update</Button>
            </CardActions>
        </Card>
    );
}