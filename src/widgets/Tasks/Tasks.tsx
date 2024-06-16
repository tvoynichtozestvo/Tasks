import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from './Tasks.module.scss'
import catImage from '../../app/assets/image/cat.png'
import AddTaskModal from "../addTaskModal/AddTaskModal.tsx";
import TasksListElement from "../../shared/ui/TasksListElement/TasksListElement.tsx";
import sortImage from '../../app/assets/image/SortAscendingOutlined.png'
import {useEffect, useState} from "react";
import axios from "axios";
export default function Tasks(){
    function openAddTaskModal(){
        const addTask = document.getElementById('addTaskModal')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        addTask.style.display = 'block'
    }
    //Тестовый массив, должен быть массив из API
    const[tasks, setTasks] = useState([])
    useEffect(()=>{
        axios.get(`https://6662276563e6a0189fece395.mockapi.io/cart`).then((res)=>{
             setTasks(res.data)
        })

    },[])
    if (tasks.length > 0 ){
        return(
            <Container task={'active'} rootClassName={styles.root} className={styles.root__wrapper}>
                <div><h2>Tasks</h2></div>
                <div className={styles.root_addTask} onClick={openAddTaskModal}><i className={'fa fa-plus-circle'}></i>add Task</div>
                <div className={styles.root_tasksContainer}>
                    <div className={styles.root_sortHeader}><div>All</div><img src={sortImage} alt="" /></div>
                    <TasksListElement DataFields={tasks}/>
                </div>
                <div id={'addTaskModal'} style={{display: 'none'}} className={styles.root_addTaskModal}>
                <AddTaskModal />
                </div>
            </Container>
        )
    }
    else {
        return (
            <Container task={'active'} rootClassName={styles.root} className={styles.root__wrapper}>
                <div><h2>Tasks</h2></div>
                <div className={styles.root_addTask} onClick={openAddTaskModal}><i className={'fa fa-plus-circle'}></i>add Task</div>
                <div className={styles.root_taskIfNull}>
                    <p>tasks not found</p>
                    <img src={catImage} alt="cat"/>
                </div>
                <div id={'addTaskModal'} style={{display: 'none'}} className={styles.root_addTaskModal}>
                    <AddTaskModal />
                </div>
            </Container>
        )
    }
}
