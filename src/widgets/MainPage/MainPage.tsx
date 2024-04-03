import styles from './MainPage.module.scss'
import Container from "../../shared/ui/Conteiner/Container.tsx";
import {Button} from "../../shared/ui/button/Button.tsx";

export default function MainPage(){
    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <div className={styles.root_info}>
                <div className={styles.root_button_container}><h1>Organize your work and life, finally.</h1></div>

                    <p>Become focused, organized, and calm with Todoist. The world's #1 task manager and to-do list app.</p>
                <div className={styles.root_button_container}>
                <Button type={'primary'} buttonSize={'default'}>Start</Button>
                </div>
            </div>

        </Container>
    )
}