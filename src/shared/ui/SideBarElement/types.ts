import {ReactNode} from "react";


export type Props = {
    typeImage: `${TypeImage}`
    active?: `${Active}`
    children?: ReactNode
}
enum TypeImage{
    task = 'fa fa-check-circle-o fa-2x',
    profile = 'fa fa-user-o fa-2x',
    notes = 'fa fa-navicon fa-2x',
    settings = 'fa fa-cog fa-2x',
    info = 'fa fa-info-circle fa-2x',
    loguout = 'fa fa-power-off fa-2x'
}
enum Active{
    active = 'active',
}