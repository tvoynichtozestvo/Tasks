import {Props} from "./types.ts";
import cn from 'classnames'
import styles from './Button.module.scss'

export const Button = ({
    type,
    buttonSize = 'default',
    borderType = 'default',
    ...props
}: Props) => {
    const classNames = cn(styles.root,{
        [styles[`root_type_${type}`]]: type,
        [styles[`root_buttonSize_${buttonSize}`]]: buttonSize,
        [styles[`root_borderType_${borderType}`]]: borderType
    })
    return <button className={classNames}>{props.children}</button>

}
