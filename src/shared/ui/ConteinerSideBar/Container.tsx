import {Props} from "./types.ts"
import cn from 'classnames'
import styles from './Container.module.scss'
import SideBar from "../../../widgets/SideBar/SideBar.tsx";

function Container(props: Props,  ) {
    const classNames = cn(styles.root__wrapper, props.className)
    const rootClassNames = cn(styles.root, props.rootClassName)
    const task = props.task
    const notes = props.notes
    const profile = props.profile
    const settings = props.settings

    return (
        <div className={rootClassNames} >
            <div><SideBar task={task} notes={notes} settings={settings} profile={profile} /></div>
            <div className={classNames} id={'switchMarginSidebar'}>{props.children}</div>
        </div>
    )
}

export default Container;