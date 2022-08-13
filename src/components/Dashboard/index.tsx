import { Content, CreateTask, Tasks } from "./style";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../assets/services/api";

import trashImg from "../../assets/trash.svg";

export interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function DashBoard() {
  const [ nameTask, setNameTask ] = useState('');
  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ taskComplete, setTaskComplete ] = useState('');


  useEffect(() => {
    api.get('tasks')
      .then(response => setTasks(response.data.tasks));
  }, []);

  async function handleCreateNewTask (event: FormEvent) {
    event.preventDefault();

    if(!nameTask) return;

    const newTask = {
      id: Math.random(),
      title: nameTask,
      isComplete: false,
    }


    setTasks(oldState => [...oldState, newTask] );  

    setNameTask('');
  }

  async function handleDeleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  async function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);

    setTasks(newTasks);
  }

  return (
    <Content>
      <CreateTask onSubmit={ handleCreateNewTask }>
        <span> Minhas tasks </span>
        <div className="input-task"> 
          <input type="text" placeholder="Digite uma task" onChange={event => setNameTask(event.target.value)}/> 
          <button type="submit" className="img-checked"></button>
        </div>
      </CreateTask>
      <Tasks>
        <table>
          <tbody>
            { tasks.map(task => (
              <tr key={task.id}>
                <td className="checked-task" > 
                  <input type="checkbox" readOnly onClick={ () => handleToggleTaskCompletion(task.id) } checked={task.isComplete} />
                </td>
                <td>{task.title}</td>
                <td className="delete-button">
                  <button onClick={ () => handleDeleteTask(task.id) } >
                      <img src={trashImg} alt="Deletar Item" />
                  </button>
                  </td>
              </tr>
            )) }
          </tbody>
        </table>
      </Tasks>
    </Content>
  )
}