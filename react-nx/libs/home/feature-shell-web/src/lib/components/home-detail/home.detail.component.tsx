import React from 'react';
import { HomeDetail } from '../../types';

import styles from './home.detail.component.module.scss'


export class HomeDetailComponent extends React.Component<HomeDetail> {
  
  onButtonClicked($event: React.MouseEvent<HTMLButtonElement>) {
    console.log('Current Event', $event);
  }

  render(): React.ReactNode {
    return (
      <div className={styles['home-detail-container']}>
       {this.props.content}       
      </div>
    );
  }
}
