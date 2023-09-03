/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
 
import styles from './to-do-btn.component.module.scss';
import { ToDoButton } from "../../types";

export class ToDoBtnComponent extends React.Component<ToDoButton> {
    render(): React.ReactNode {
        return (
            <>
            <button className={styles['to-do-btn']} onClick={this.props.onClickEvent}>Click Me!</button>
            </>
        )
    }
}