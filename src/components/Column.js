import React from "react";
import { Box, Paper, Typography } from '@mui/material'
import Task from './Task.js'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({column, tasks}) => {
    return (
        // <Box>
            <Paper sx={{p:2}}>
            <Typography variant="h1">
            {column.title}
            </Typography >
            <Droppable droppableId={column.id}>
                {(provided)=>(
                    <Box 
                    // innerRef={provided.innerRef}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {tasks.map((task, index)=><Task key={task.id} task={task} index={index}/>)}
                        {provided.placeholder}
                    </Box>
                )}
            </Droppable>

            </Paper>

        // </Box>
    )
}

export default Column