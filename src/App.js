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
  // TODO: reorder the column
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
