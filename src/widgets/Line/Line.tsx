import Container from "../../shared/ui/Conteiner/Container.tsx";
import styles from "./Line.module.scss";

export default function Line(){
    return (<Container rootClassName={styles.root} className={styles.root__wrapper} >
        <div className={styles.root_line}>

        </div>
    </Container>)
}