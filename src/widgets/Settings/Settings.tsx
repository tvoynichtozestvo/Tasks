import {useState} from "react";
import Container from "../../shared/ui/ConteinerSideBar/Container.tsx";
import styles from './/Settings.module.scss'

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
                <div onClick={setProfile} className={styles.root_navContaier_navItems} id={'profile'}>Profile</div>
                <div onClick={setTheme} className={styles.root_navContaier_navItems} id={'theme'}>Theme</div>
                <div onClick={setOther} className={styles.root_navContaier_navItems} id={'other'}>Other</div>
            </div>




            <div>
            {selectedTab === 'Profile' && <div>HTML для Profile</div>}
            {selectedTab === 'Theme' && <div>HTML для Theme</div>}
            {selectedTab === 'Other' && <div>HTML для Other</div>}
            </div>

        </Container>
    )
}