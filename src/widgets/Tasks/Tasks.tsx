import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from './Tasks.module.scss'
import catImage from '../../app/assets/image/cat.png'
import AddTaskModal from "../addTaskModal/AddTaskModal.tsx";
export default function Tasks(){
    function openAddTaskModal(){
        const addTask = document.getElementById('addTaskModal')
        addTask.style.display = 'block'
    }
    return(
        <Container task={'active'} rootClassName={styles.root} className={styles.root__wrapper}>
            <div><h2>Tasks</h2></div>
            <div className={styles.root_addTask} onClick={openAddTaskModal}><i className={'fa fa-wheelchair-alt'}></i>add Task</div>
            <div className={styles.root_tasksContainer}>
                <p>tasks not found</p>
                <img src={catImage} alt="cat"/>
            </div>
            <div id={'addTaskModal'} style={{display: 'none'}} className={styles.root_addTaskModal}>
            <AddTaskModal />
            </div>
        </Container>
    )
}
