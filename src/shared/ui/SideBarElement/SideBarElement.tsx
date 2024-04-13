import {Props} from "./types.ts";
import cn from "classnames";
import styles from "./SideBarElement.module.scss"

export const SideBarElement = ({typeImage, active, ...props}:Props) =>{
    const classNames = cn(styles.root,{
        [styles[`root_type_${active}`]]:active,
    })

    return(
        <div className={classNames}>
            <div className={styles.root__wrapper}>
            <i className={typeImage}></i>
            <p>{props.children}</p>
            </div>
        </div>
    )
}