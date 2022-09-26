import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import initialData from "./initial-data";
import { CssBaseline, Container } from "@mui/material";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [data, setData] = useState(initialData);
const onDragEnd = result => {
  const {destination, source, draggableId} = result

  if(!destination){
    return
  }
  // TODO: reorder the column
  if(destination.droppableId === source.droppableId && destination.index === source.index){
    return
  }

  const column = data.columns[source.droppableId]
  const newTaskIds = [...column.taskIds]
  newTaskIds.splice(source.index, 1)
  newTaskIds.splice(destination.index, 0, draggableId)

  const newColumn = {...column, taskIds: newTaskIds}
  setData((prevState)=>({...prevState , columns:{...prevState.columns, [newColumn.id]:newColumn}}))
}

  return (
    <>
      <CssBaseline />
      <Container>
        <div className="App">
          <DragDropContext
          onDragEnd= {onDragEnd}
          >
            {data.columnOrder.map((columnId) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </DragDropContext>
        </div>
      </Container>
    </>
  );
}

export default App;
