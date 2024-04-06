import styles from './MainPageImg.module.scss'
import image from '../../app/assets/image/imghome (2).png'
import Container from "../../shared/ui/Conteiner/Container.tsx";
import {Button} from "../../shared/ui/button/Button.tsx";


export default function Mainpageimgsecond(){

    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <div className={styles.root_info}>
                <h2>
                    Organize your life
                </h2>
                <p>
                    Whether you need to complete a task for work or school, Tasks is here to help you manage all your tasks.
                </p>
                <div className={styles.root_info_button_container}>
                <Button type={'primary'}>More</Button>
                </div>
            </div>
            <img src={image}/>
        </Container>
    )
}
