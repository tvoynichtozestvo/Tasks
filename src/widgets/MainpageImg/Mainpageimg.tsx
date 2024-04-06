import styles from './MainPageImg.module.scss'
import image from '../../app/assets/image/screenshot.png'
import Container from "../../shared/ui/Conteiner/Container.tsx";


export default function Mainpageimg(){

    return(
        <Container rootClassName={styles.root} className={styles.root_wrapper}>
            <img src={image}/>
        </Container>
    )
}
