import Container from "../../shared/ui/Conteiner/Container.tsx";
import styles from './AddTaksModal.module.scss'
import {TextInput} from "../../shared/ui/TextInput/TextInput.tsx";
import {useEffect, useState} from "react";
import {Button} from "../../shared/ui/button/Button.tsx";
import axios from "axios";
export default function AddTaskModal(){
    //Ну как бы тут должен быть запрос на добавление API, который создаёт новую запись в БД
    //И потом эти записи выводятся на странице Tasks
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')

    const obj = {title:title, date:day }
    function getDay(){
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        const date = new Date();
        const day = date.getDay();
        const dd = days[day]
        setDay(dd)
        return dd;
    }
    useEffect(()=>{
        getDay()
    },[])


    function closeAddTaskModal(){
        const addTask = document.getElementById('addTaskModal')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        addTask.style.display = 'none'
    }

    function handlerSubmit(){
        axios.post(`https://6662276563e6a0189fece395.mockapi.io/cart`, obj)
        setTimeout(()=>{
            window.location.reload()
        }, 2000)

    }
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <div className={styles.root_titleCOntainer}>Title: {title} <i className={"fa fa-trash"}></i></div>
            <div className={styles.root_titelInput}>
                <TextInput type={'primary'} placeholder={'Title'} name={'title'} value={title} onChange={event =>setTitle(event.target.value)} />
               <div className={styles.root_dateContainer}> {day}</div>
            </div>
            <div className={styles.root_addTaskMainContainer}>
                <textarea placeholder={'description'}></textarea>
            </div>
            <div className={styles.root_addModalButtonsContainer}>
                <Button type={'secondary'} buttonSize={'small'} onClick={closeAddTaskModal}>cancel</Button>
                <Button type={'primary'} buttonSize={'small'} onClick={handlerSubmit}>apply</Button>
            </div>
        </Container>
    )
}
