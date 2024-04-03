import styles from './Header.module.scss'
import {Button} from "../../shared/ui/button/Button.tsx";
import Container from "../../shared/ui/Conteiner/Container.tsx";

export default function Header(){
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <h1>Tasks</h1>
            <Button type={'primary'} buttonSize={'default'}>Login</Button>
        </Container>
    )
}