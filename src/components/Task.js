import React from "react";
import { Card, Typography, Box } from '@mui/material'
import {Draggable} from 'react-beautiful-dnd'

const Task = ({task, index}) => {
    return(

<Draggable  draggableId={task.id} index ={index}>
{(provided)=>(

    <Card 
    sx={{p:2,mb:2, justifyContent:'start'}}
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    // innerRef= {provided.innerRef}
    >
    <Typography textAlign={'left'}> {task.contents}</Typography>
    </Card>
        )}
</Draggable>

    )
}
export default Task