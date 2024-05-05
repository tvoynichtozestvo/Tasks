import styles from './Header.module.scss'
import {Button} from "../../shared/ui/button/Button.tsx";
import Container from "../../shared/ui/Conteiner/Container.tsx";
import {Link} from "react-router-dom";
import HeaderNavigation from "../../shared/ui/HeaderNavigation/HeaderNavigation.tsx";


export default function Header(){

    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <Link to={'/'}>Tasks</Link>
            <div className={styles.root__nav}>
                <HeaderNavigation />
                <Link to={'/login'}>
                    <Button type={'primary'} buttonSize={'default'}>Login</Button>
                </Link>
            </div>
        </Container>
    )
}