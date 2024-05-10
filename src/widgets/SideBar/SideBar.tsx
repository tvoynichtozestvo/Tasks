import {SideBarElement} from "../../shared/ui/SideBarElement/SideBarElement.tsx";
import Container from "../../shared/ui/Conteiner/Container.tsx";
import styles from './SideBar.module.scss';
import {useNavigate} from "react-router-dom";


export default function SideBar({task="", profile="", notes="", settings="", }){''
    const navigate = useNavigate()

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
        switchDisplay.style.marginLeft = '17vw'
        mainSide.style.display = 'block'
        miniSide.style.display = 'none'
    }
    function navigateToProfile(){
        navigate('/profile')
    }
    function navigateToTask(){
        navigate('/task')
    }
    function navigateToNotes(){
        navigate('/notes')
    }
    function navigateToSettings(){
        navigate('/settings')
    }
    function Logout(){
        navigate('/')

    }
    return(
        <>
        <div className={styles.root_mainSideBar} id={'main'}>
            <Container rootClassName={styles.root} className={styles.root__wrapper}  >
                <div>

                    <div className={styles.root_sidebarHeader} onClick={openMini}>
                        <i className="fa fa-list-ul fa-2x" ></i>
                        <h2>Tasks</h2>
                    </div>

                    <div className={styles.root_mainElements}>
                    <SideBarElement typeImage={'fa fa-user-o fa-2x'} active={profile} onClick={navigateToProfile}>Profile</SideBarElement>
                    <SideBarElement typeImage={'fa fa-check-circle-o fa-2x'} active={task} onClick={navigateToTask}>Tasks</SideBarElement>
                    <SideBarElement typeImage={'fa fa-navicon fa-2x'} active={notes} onClick={navigateToNotes}>Notes</SideBarElement>
                    <SideBarElement typeImage={'fa fa-cog fa-2x'} active={settings} onClick={navigateToSettings}>Settings</SideBarElement>
                    </div>

                    <div>
                    <SideBarElement typeImage={'fa fa-power-off fa-2x'} onClick={Logout}>Logout</SideBarElement>
                    <SideBarElement typeImage={'fa fa-info-circle fa-2x'} >Info</SideBarElement>
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
                            <SideBarElement typeImage={'fa fa-user-o fa-2x'} active={profile} onClick={navigateToProfile}></SideBarElement>
                            <SideBarElement typeImage={'fa fa-check-circle-o fa-2x'} active={task} onClick={navigateToTask}></SideBarElement>
                            <SideBarElement typeImage={'fa fa-navicon fa-2x'} active={notes} onClick={navigateToNotes}></SideBarElement>
                            <SideBarElement typeImage={'fa fa-cog fa-2x'} active={settings} onClick={navigateToSettings}></SideBarElement>
                        </div>

                        <div className={styles.root_logInfo}>
                            <SideBarElement typeImage={'fa fa-power-off fa-2x'} onClick={Logout}></SideBarElement>
                            <SideBarElement typeImage={'fa fa-info-circle fa-2x'} ></SideBarElement>
                        </div>

                </Container>
            </div>
            </>
    )
}