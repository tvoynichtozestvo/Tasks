import styles from './MainPage.module.scss'
import Container from "../../shared/ui/Conteiner/Container.tsx";
import image from '../../app/assets/image/vvvvvvvvvvvzzzzzzzz.png'
import {Button} from "../../shared/ui/button/Button.tsx";

export default function MainPage(){
    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <div className={styles.root_image}>
                <img src = {image} />
            </div>
            <div className={styles.root_info}>
                    <h1>Tasks -</h1>
                    <p >приложение для ведения заметок и отчета задач а еще мяу мяу мяу</p>
                <div className={styles.root_button_container}>
                <Button type={'primary'} buttonSize={'default'}>Start</Button>
                </div>
            </div>
            <div className={styles.root_block}>

            </div>
        </Container>
    )
}