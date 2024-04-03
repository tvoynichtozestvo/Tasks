import {Props} from "./types.ts";
import cn from "classnames";
import styles from "/TextInput.module.scss";

export const TextInput = ({
    type,
    inputSize = 'default'
}: Props) => {
    const classNames = cn(styles.root,{
        [styles[`root_type_${type}`]]: type,
        [styles[`root_inputSize_${inputSize}`]]: inputSize,
    })
    return <input className={classNames}/>
}