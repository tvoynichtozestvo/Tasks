import styles from './ProfileHeader.module.scss'
import Container from "../../shared/ui/Conteiner/Container.tsx";
import {Button} from "../../shared/ui/button/Button.tsx";


export default function ProfileHeader(){
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper} >
            <div className={styles.root_headerForProfile}>
                <div>
                    <img src="src/app/assets/image/UserIcons/default.png" alt=""/>
                </div>
                <div>
                    <h2>Login</h2>
                </div>
                <div className={styles.root_buttonPos}>
                    <Button type={'primary'} borderType={'strong'} >Edit profile</Button>
                </div>
            </div>

        </Container>
    )
}