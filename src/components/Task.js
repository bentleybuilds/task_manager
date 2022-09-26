import React from "react";
import { Card, Typography, Box } from '@mui/material'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {Draggable} from 'react-beautiful-dnd'

const Task = ({task, index}) => {
    return(

<Draggable  draggableId={task.id} index ={index}>
{(provided)=>(

    <Card 
    sx={{p:2,mb:2, justifyContent:'start'}}
    ref={provided.innerRef}
    {...provided.draggableProps}
    // innerRef= {provided.innerRef}
    // {...provided.dragHandleProps}
    >
    <Typography textAlign={'left'}> {task.contents}</Typography>
    <span {...provided.dragHandleProps}>
        <SwapVertIcon 
        ref={provided.innerRef}
         sx={{color:"blue"}} />
        </span>
    </Card>
        )}
</Draggable>

    )
}
export default Task