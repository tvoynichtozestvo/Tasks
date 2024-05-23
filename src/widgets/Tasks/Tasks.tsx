import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from './Tasks.module.scss'
import catImage from '../../app/assets/image/cat.png'
import AddTaskModal from "../addTaskModal/AddTaskModal.tsx";
import TasksListElement from "../../shared/ui/TasksListElement/TasksListElement.tsx";
import sortImage from '../../app/assets/image/SortAscendingOutlined.png'
export default function Tasks(){
    function openAddTaskModal(){
        const addTask = document.getElementById('addTaskModal')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        addTask.style.display = 'block'
    }
    //Тестовый массив, должен быть массив из API
    const tasks =[
        {id: '1', value:'Купить корм котику', date:'01.03.2005'},
        {id: '2', value:'Сходить за молоком, хлебом, овощами', date:'01.03.2005'},
        {id: '3', value:'Вынести мусор', date:'01.03.2005'}
    ]
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
