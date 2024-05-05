import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from "../../widgets/Footer/Footer.module.scss";
import Tariffs from "../../widgets/Tariffs/Tariffs.tsx";


export default function testSidebar() {
    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper} notes={'active'}>
            <Tariffs/>
        </Container>
    )
}