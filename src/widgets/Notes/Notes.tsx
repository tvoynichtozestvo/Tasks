import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from './Notes.module.scss'
export default function Notes(){
    return(
        <Container notes={'active'} rootClassName={styles.root} className={styles.root__wrapper}>
            <div className={styles.root_notesHeader}>
                <h2>Notes</h2>
            </div>
            <div className={styles.root_notesContainer}>
                <textarea placeholder={'write your notes'}></textarea>

            </div>

        </Container>
    )

}