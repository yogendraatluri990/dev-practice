import React from "react";

import {ToDoBtn} from '../../types';

import styles from './to-do-btn.component.module.scss';

export class ToDoBtnComponent extends React.Component<ToDoBtn> {
  
    render(): React.ReactNode {
        return (
            <div>
                <button className={styles['to-do-btn']} onClick={this.props.clicked}> 
                Click Me!!!                   
                </button>
            </div>
        )
    }
}