import styles from './Tabs.module.scss';
import type { TabsProps } from './type';
import { useState } from 'react';
import { ButtonUI } from '../Button/Button';

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const {tabs, initialActiveId} = props;
  const [currentId, setCurrentId] = useState(initialActiveId);

  const CurrentComponent = tabs.find((item)=> item.id === currentId)?.component;

  return (
  <div className={styles.tabsContainer}>
    <div className={styles.tabHeader}>
      {tabs.map((tab)=>{
        return (
        <div className={styles.tab}>
          <ButtonUI type='tertiary' onClick={()=>setCurrentId(tab.id)} width='100%'>
            <span className={tab.id === currentId ? 'buttonTitle' : 'title'}>{tab.title}</span>
          </ButtonUI>
          {tab.id === currentId && <span className={styles.activeLine}></span>}
        </div>)
      })}
    </div>
    {CurrentComponent}
  </div>
  )
}