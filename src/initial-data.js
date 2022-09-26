const initialData ={
    tasks:{
        'task-1':{id:'task-1', contents:'Daily Commit'},
        'task-2':{id:'task-2', contents:'Naz Meds'},
        'task-3':{id:'task-3', contents:'NextJS Progress'},
        'task-4':{id:'task-4', contents:'Draggable Asset list'}
    },
    columns:{
        'column-1':{
            id:'column-1',
            title:'To Do',
            taskIds:['task-1','task-2','task-3','task-4']
        }
    },
    columnOrder:['column-1']
}

export default initialData