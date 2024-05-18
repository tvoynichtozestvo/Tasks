import styles from './HeaderNavigation.module.scss'
import { Link} from "react-router-dom";
import Container from "../Conteiner/Container.tsx";


export default function HeaderNavigation() {

    return (
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <Link to={'/'}>Home</Link>
            <Link to={'/tariffs'}>Tariffs</Link>
        </Container>
    )
}