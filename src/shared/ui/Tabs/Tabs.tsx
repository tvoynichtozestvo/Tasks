import { Tabs as AriaTabs, TabList, Tab } from 'react-aria-components'
import styles from './Tabs.module.scss'
import { Props } from './types.ts'

export default function Tabs(props: Props) {
    return (
        <AriaTabs
            className={styles.root}
            selectedKey={props.selectedKey}
            onSelectionChange={props.onSelectionChange}
        >
            <TabList className={styles.root__list} aria-label='Tabs'>
                {props.tabs.map((tab) => (
                    <Tab className={styles.root__tab} id={tab.id} key={tab.id}>
                        {tab.label}
                    </Tab>
                ))}
            </TabList>
        </AriaTabs>
    )
}