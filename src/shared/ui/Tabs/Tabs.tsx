import styles from "./Tabs.module.scss";
import type { TabsProps } from "./type";
import { useState } from "react";
import { ButtonUI } from "../Button/Button";
import { createPortal } from "react-dom";

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const { tabs, activeId, onClick } = props;


  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => {
          return (
            <div className={styles.tab}>
              <ButtonUI
                type="tertiary"
                onClick={() => onClick(tab.id)}
                width="auto"
              >
                <span
                  className={tab.id === activeId ? "buttonTitle" : "title"}
                  style={{fontWeight: 500}}
                >
                  {tab.title}
                </span>
              </ButtonUI>
              {tab.id === activeId && (
                <span className={styles.activeLine}></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
