import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from "../../widgets/Footer/Footer.module.scss";


export default function testSidebar() {
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper} notes={'active'}>
            <main id="smain">
                <div className="tasks-header">
                    <h2 className="h2__tasks">Notes</h2>
                </div>


                <div className="tasks-container">

                    <div className="tasks-items">
                        <div className="tasks-checkbox">
                        </div>
                        <div className="tasks-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsam, laborum minima
                                nam obcaecati officiis perspiciatis possimus quae </p>
                        </div>
                        <div className="tasks-date">
                            <p>Today</p>
                        </div>
                    </div>
                    <div className="tasks-items">
                        <div className="tasks-checkbox">
                        </div>
                        <div className="tasks-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsam, laborum minima
                                nam obcaecati officiis perspiciatis possimus quae </p>
                        </div>
                        <div className="tasks-date">
                            <p>Today</p>
                        </div>
                    </div>
                    <div className="tasks-items">
                        <div className="tasks-checkbox">
                        </div>
                        <div className="tasks-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsam, laborum minima
                                nam obcaecati officiis perspiciatis possimus quae </p>
                        </div>
                        <div className="tasks-date">
                            <p>Today</p>
                        </div>
                    </div>
                    <div className="tasks-items">
                        <div className="tasks-checkbox">
                        </div>
                        <div className="tasks-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsam, laborum minima
                                nam obcaecati officiis perspiciatis possimus quae </p>
                        </div>
                        <div className="tasks-date">
                            <p>Today</p>
                        </div>
                    </div>
                </div>
            </main>

        </Container>
    )
}