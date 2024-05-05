import Container from "../../shared/ui/Conteiner/Container.tsx";
import styles from './ProfileFeatures.module.scss'
export default function ProfileFeatures(){
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper} >

                <div className={styles.root_statContainer} >
                    <div>
                        <h2>Statistics</h2>
                    </div>

                    <div className={styles.root_statContainer_stat}>
                        <div>
                            <div>Week</div>
                            <div className={styles.root_statContainer_statItems}>
                                <div className={styles.root_statContainer_statItems_statItemP}><p>Mon</p></div>
                                <div className={styles.root_statContainer_statItems_statItemP}><p>Tue</p></div>
                                <div className={styles.root_statContainer_statItems_statItemP}><p>Wed</p></div>
                                <div className={styles.root_statContainer_statItems_statItemP}><p>Thu</p></div>
                                <div className={styles.root_statContainer_statItems_statItemA}><p>Fri</p></div>
                                <div className={styles.root_statContainer_statItems_statItemP}><p>Sat</p></div>
                                <div className={styles.root_statContainer_statItems_statItemP}><p>Sun</p></div>

                            </div>
                            <div>Total: 89 task</div>
                        </div>

                        <div className={styles.root_statContainer_totalTaskContainer}>
                            <div className={styles.root_statContainer_totalTask}>
                                <p>10 tasks</p>
                            </div>
                        </div>
                    </div>


                </div>


                <div className={styles.root_infoContainer}>
                    <div>
                        <h2>Info</h2>
                    </div>
                    <div className={styles.root_infoContainer_info}>
                        <p>Email: meow@gmail.com</p>
                        <p>Name: Liza_meow</p>
                        <p>Password: meowmeowmeow</p>
                    </div>

                </div>


        </Container>
    )
}