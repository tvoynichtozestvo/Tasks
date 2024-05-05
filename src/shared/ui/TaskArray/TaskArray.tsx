import cn from 'classnames'
import styles from 'TaskArray.module.scss'
import {Props} from "./types.ts";

function TaskArray(props: Props){
    const classNames = cn(styles.root__wrapper, props.className)
    const rootClassNames = cn(styles.root, props.rootClassName)
    return(
        <div className={rootClassNames}>
            <div className={classNames}>{props.children}</div>
        </div>
    )
}

export default TaskArray;