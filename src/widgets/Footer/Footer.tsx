
import styles from "./Footer.module.scss"
import Container from "../../shared/ui/Conteiner/Container.tsx";
import {Link} from "react-router-dom";


export default function Footer(){
    return(

        <Container rootClassName={styles.root} className={styles.root__wrapper}>
            <div  className={styles.root_line_wrpper}>
                <div className={styles.root_line_wrpper_line}>

                </div>
            </div>
            <div className={styles.root_content_container}>
                <div>
                    <h1 className={styles.root_logo}>Tasks</h1>
                    <p className={styles.root_discription}>Join millions of people who organize work and life with Tasks.</p>
                </div>
                <div>
                    <h2>Features</h2>
                    <p><Link to={""}>How It Works</Link></p>
                    <p><Link to={""}>For Teams</Link></p>
                    <p><Link to={""}>Pricing</Link></p>
                    <p><Link to={""}>Templates</Link></p>
                </div>
                <div>
                    <h2>Resources</h2>
                    <p><Link to={""}>Download Apps</Link></p>
                    <p><Link to={""}>Help Center</Link></p>
                    <p><Link to={""}>Productivity Methods</Link></p>
                    <p><Link to={""}>Integrations</Link></p>
                    <p><Link to={""}>Channel Partners</Link></p>
                    <p><Link to={""}>Developer API</Link></p>
                    <p><Link to={""}>Status</Link></p>
                </div>
                <div>
                    <h2>Company</h2>
                    <p><Link to={""}>About Us</Link></p>
                    <p><Link to={""}>Careers</Link></p>
                    <p><Link to={""}>Inspiration Hub</Link></p>
                    <p><Link to={""}>Press</Link></p>
                    <p><Link to={""}>Twist</Link></p>
                </div>
            </div>


        </Container>
    )
}