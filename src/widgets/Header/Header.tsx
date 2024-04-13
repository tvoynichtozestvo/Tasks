import styles from './Header.module.scss'
import {Button} from "../../shared/ui/button/Button.tsx";
import Container from "../../shared/ui/Conteiner/Container.tsx";
import Tabs from "../../shared/ui/Tabs/Tabs.tsx";
import {Link} from "react-router-dom";


export default function Header(){

    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <Link to={'/'}>Tasks</Link>
            <div className={styles.root__nav}>
                <Tabs tabs={[
                    { id: '1', label: 'Home' },
                    { id: '2', label: 'Tariffs' },

                ]}></Tabs>
                <Link to={'/login'}>
                    <Button type={'primary'} buttonSize={'default'}>Login</Button>
                </Link>
            </div>
        </Container>
    )
}