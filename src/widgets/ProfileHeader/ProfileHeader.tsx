import styles from './ProfileHeader.module.scss'
import Container from "../../shared/ui/Conteiner/Container.tsx";
import {Button} from "../../shared/ui/button/Button.tsx";
import {useNavigate} from "react-router-dom";


export default function ProfileHeader(){
    const navigate = useNavigate()
    function editButton(){
        navigate('/settings')
    }
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
                    <Button type={'primary'} borderType={'strong'} onClick={editButton}>Edit profile</Button>
                </div>
            </div>

        </Container>
    )
}