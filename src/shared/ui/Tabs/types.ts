import { Key } from 'react'

export type Props = {
    tabs: Tab[]
    selectedKey?: string
    onSelectionChange?: (key: Key) => void
}
export type Tab = {
    id: string
    label: string
}