/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { ToDo } from "../../types";

import styles from './to-do.page.module.scss';
import { ToDoBtnComponent } from "../../components";


export class ToDoPageModule extends React.Component<Partial<ToDo>> {

 render(): React.ReactNode {
     return (
        <>
          <div className={styles['to-do-cotaniner']}>

            <h1 className={styles['to-do-header']}>{this.props?.header}</h1> 
            <p className={styles['to-do-caption']}>{this.props?.caption}</p>

            <div className={styles['to-do-task-container']}>
                {this.props.tasks}
            </div>

            <div>
                <ToDoBtnComponent onClickEvent={(event) => this.props.clickEvent?.(event)}/>
            </div>
          </div>
        </>
     )
 }

}