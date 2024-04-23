import {SideBarElement} from "../../shared/ui/SideBarElement/SideBarElement.tsx";
import Container from "../../shared/ui/Conteiner/Container.tsx";
import styles from './SideBar.module.scss';


export default function SideBar({task="", profile="", notes="", settings="", }){
    function openMini(){
        const mainSide = document.getElementById('main');
        const miniSide = document.getElementById('mini');
        const switchDisplay = document.getElementById('switchMarginSidebar');
        switchDisplay.style.marginLeft = '8vw'
        mainSide.style.display = 'none'
        miniSide.style.display = 'block'

    }
    function openMain(){
        const mainSide = document.getElementById('main');
        const miniSide = document.getElementById('mini');
        const switchDisplay = document.getElementById('switchMarginSidebar');
        switchDisplay.style.marginLeft = '20vw'
        mainSide.style.display = 'block'
        miniSide.style.display = 'none'

    }

    return(
        <>
        <div className={styles.root_mainSideBar} id={'main'}>
            <Container rootClassName={styles.root} className={styles.root__wrapper}  >
                <div >
                    <div className={styles.root_sidebarHeader} onClick={openMini}>
                        <i className="fa fa-list-ul fa-2x" ></i>
                        <h2>Tasks</h2>
                    </div>
                    <div className={styles.root_mainElements}>
                    <SideBarElement typeImage={'fa fa-user-o fa-2x'} active={profile}>Profile</SideBarElement>
                    <SideBarElement typeImage={'fa fa-check-circle-o fa-2x'} active={task}>Tasks</SideBarElement>
                    <SideBarElement typeImage={'fa fa-navicon fa-2x'} active={notes}>Notes</SideBarElement>
                    <SideBarElement typeImage={'fa fa-cog fa-2x'} active={settings}>Settings</SideBarElement>
                    </div>
                    <div>
                     <SideBarElement typeImage={'fa fa-info-circle fa-2x'} >Settings</SideBarElement>
                    <SideBarElement typeImage={'fa fa-power-off fa-2x'} >Logout</SideBarElement>
                    </div>
                </div>
            </Container>
        </div>

            <div className={styles.root_miniSideBar} id={'mini'}>
                <Container rootClassName={styles.root} className={styles.root__wrapper}>
                        <div className={styles.root_sidebarHeader} onClick={openMain}>
                            <i className="fa fa-list-ul fa-2x" ></i>

                        </div>
                        <div className={styles.root_mainElements}>
                            <SideBarElement typeImage={'fa fa-user-o fa-2x'} active={profile}></SideBarElement>
                            <SideBarElement typeImage={'fa fa-check-circle-o fa-2x'} active={task}></SideBarElement>
                            <SideBarElement typeImage={'fa fa-navicon fa-2x'} active={notes}></SideBarElement>
                            <SideBarElement typeImage={'fa fa-cog fa-2x'} active={settings}></SideBarElement>
                        </div>
                        <div className={styles.root_logInfo}>
                            <SideBarElement typeImage={'fa fa-info-circle fa-2x'} ></SideBarElement>
                            <SideBarElement typeImage={'fa fa-power-off fa-2x'} ></SideBarElement>
                        </div>

                </Container>
            </div>
            </>
    )
}