import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from './Profile.module.scss'
import ProfileHeader from "../ProfileHeader/ProfileHeader.tsx";
import ProfileFeatures from "../ProfileFeatures/ProfileFeatures.tsx";
export default function Profile(){
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper} profile={'active'}>
            <ProfileHeader/>
            <ProfileFeatures/>
        </Container>
    )
}