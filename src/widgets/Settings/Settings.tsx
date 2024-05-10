import {useState} from "react";
import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from './/Settings.module.scss'
import eyeImage from '../../../src/app/assets/image/Eye.png'
import pencilImage from '../../../src/app/assets/image/pencil.png'
import icon from '../../../src/app/assets/image/UserIcons/default.png'
import {Button} from "../../shared/ui/button/Button.tsx";
import {TextInput} from "../../shared/ui/TextInput/TextInput.tsx";

export default function Settings(){
    const [selectedTab, setSelectedTab] = useState('Profile');
    function setProfile(){
        setSelectedTab('Profile')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const theme:HTMLElement   = document.getElementById('theme')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const profile:HTMLElement = document.getElementById('profile')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const other:HTMLElement = document.getElementById('other')
        theme.style.color = 'white'
        profile.style.color = '#6964E2'
        other.style.color = 'white'
        profile.style.textDecoration = 'underline'
        theme.style.textDecoration = 'none'
        other.style.textDecoration = 'none'
    }
    function setTheme(){
        setSelectedTab('Theme')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const theme:HTMLElement   = document.getElementById('theme')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const profile:HTMLElement = document.getElementById('profile')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const other:HTMLElement = document.getElementById('other')
        
        theme.style.color = '#6964E2'
        profile.style.color = 'white'
        other.style.color = 'white'
        theme.style.textDecoration = 'underline'
        profile.style.textDecoration = 'none'
        other.style.textDecoration = 'none'

    }
    function setOther(){
        setSelectedTab('Other')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const theme:HTMLElement   = document.getElementById('theme')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const profile:HTMLElement = document.getElementById('profile')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const other:HTMLElement = document.getElementById('other')

        theme.style.color = 'white'
        profile.style.color = 'white'
        other.style.color = '#6964E2'
        other.style.textDecoration = 'underline'
        profile.style.textDecoration = 'none'
        theme.style.textDecoration = 'none'
    }

    return(
        <Container rootClassName={styles.root} className={styles.root__wrapper} settings={'active'} >
            <div>
                <h2>Settings</h2>
            </div>
            <div className={styles.root_navContaier}>
                <div onClick={setProfile} className={styles.root_navContaier_navItems} id={'profile'} style={{color: '#6964E2', textDecoration: 'underline'}}>Profile</div>
                <div onClick={setTheme} className={styles.root_navContaier_navItems} id={'theme'}>Theme</div>
                <div onClick={setOther} className={styles.root_navContaier_navItems} id={'other'}>Other</div>
            </div>
            <div className={styles.root_mainContainer}>
            {selectedTab === 'Profile' &&
             <div>
                 <div className={styles.root_profileIcontContainer}>
                     <img src={icon} alt=""/>
                     <Button type={'primary'} buttonSize={'small'}>change</Button>
                     <Button type={'secondary'} buttonSize={'small'}>delete</Button>
                 </div>

                 <div className={styles.root_profileInfoContainer}>
                     <div className={styles.root_profileInfoContainer_profileInfoItems}>
                         <h4>Login:</h4>
                         <TextInput type={'primary'}/>
                     </div>
                     <div className={styles.root_profileInfoContainer_profileInfoItems} >
                         <h4>Email: </h4>
                         <span style={{fontSize: '20px', marginBottom: '6px', marginRight: '5px'}}>memimemamomy@gmail.com</span>
                         <img src={pencilImage} alt=""/>
                     </div>
                     <div className={styles.root_profileInfoContainer_profileInfoItems}>
                         <h4>Password</h4>
                         <Button type={'primary'} buttonSize={'small'}>change</Button>
                     </div>
                     <div className={styles.root_profileInfoContainer_profileInfoItems}>
                         <Button type={'secondary'} buttonSize={'small'}>delete account</Button>
                     </div>

                 </div>

            </div>}
            {selectedTab === 'Theme' &&
                <div className={styles.root_themeContainer}>
                    <div className={styles.root_themeContainer_themeWrapper}>
                        <div>
                            <h2>Dark theme:</h2>
                            <div className={styles.root_themeContainer_themeWrapper_themeContaienr}>
                                <div style={{background: 'black'}}></div>
                                <div style={{background: '#6964E2'}}></div>
                            </div>
                        </div>
                        <div className={styles.root_themeContainer_applyContainer}>
                            <div><img src={eyeImage} alt=""/></div>
                            <div><Button type={'primary'} buttonSize={'default'}>Change</Button></div>
                        </div>
                    </div>

                    <div className={styles.root_themeContainer_themeWrapper}>
                        <div>
                            <h2>Light theme:</h2>
                            <div className={styles.root_themeContainer_themeWrapper_themeContaienr}>
                                <div style={{background: 'white'}}></div>
                                <div style={{background: '#6964E2'}}></div>
                            </div>
                        </div>
                        <div className={styles.root_themeContainer_applyContainer}>
                            <div><img src={eyeImage} alt=""/></div>
                            <div><Button type={'primary'} buttonSize={'default'}>Change</Button></div>
                        </div>
                    </div>

            </div>}
            {selectedTab === 'Other' &&
                <div className={styles.root_other}>
                    <div><h2>Language</h2></div>
                    <select>
                        <option>English</option>
                        <option>Russia</option>
                    </select>
                </div>}
            </div>
            <div className={styles.root_settingsButton}>
                <Button type={'primary'} buttonSize={'small'}>save</Button>
                <Button type={'secondary'} buttonSize={'small'}>cancel</Button>
            </div>

        </Container>
    )
}