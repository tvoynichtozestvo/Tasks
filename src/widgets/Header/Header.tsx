import styles from './Header.module.scss'
import {Button} from "../../shared/ui/button/Button.tsx";
import Container from "../../shared/ui/Conteiner/Container.tsx";
import Tabs from "../../shared/ui/Tabs/Tabs.tsx";

export default function Header(){
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <h1>Tasks</h1>
            <div className={styles.root__nav}>
                <Tabs tabs={[
                    { id: '1', label: 'Features' },
                    { id: '2', label: 'Tariffs' },

                ]}></Tabs>
                <Button type={'primary'} buttonSize={'default'}>Login</Button>
            </div>
        </Container>
    )
}