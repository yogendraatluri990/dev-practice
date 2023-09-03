/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { Home, HomeState } from '../types';
import { HomeStateDefault } from '../defaults';

import { HomeDetailComponent } from '../components';

import { ToDoPageModule } from '@react-nx/ad-universe/to-do';

import styles from './home.page.module.scss';

export class HomePage extends React.Component<Home, HomeState> {
  constructor(props: Home) {
    super(props);
    this.state = { ...HomeStateDefault };
  }

  tasks: React.ReactNode[] = [];

  onButtonClick(Event: React.MouseEvent) {
    this.setState({
      hostElement: `${Event.type}`,
    });
  }

  getListElement() {
    const random = Math.random();   
    
    
    return (
      <ul key={random * 4}>
        {
          [{Id: `${random * 2}`, Name: `Task ${random + 2}`, Status: `${'Pending'}` }].map(obj => 
        <li key={random * 2}>
          <h1> Id: {random * 2} </h1>
        <h4>Name:  Task ${random + 2}</h4>
        <h6>Status: ${'Pending'}</h6>
        </li>
  )}
        
      </ul>
    )
  }

  setTasks() {
    console.log('I happened');
    this.tasks.push(this.getListElement());
  }

  

  getMyMessage(message: string): void {
    this.setState({
      message: message,
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <div className={styles['page-grid']}>
          <div className={styles['page-container']}>
            <h1 className={styles['page-container-title']}>
              {this.props.title}
            </h1>
            {this.props.isTag ? (
              <p className={styles['page-container-message']}>
                This is a react learning curve.
              </p>
            ) : (
              <p className={styles['page-container-message']}>
                {this.props.message}
              </p>
            )}

            {this.props.isTag && (
              <div className={styles['page-button-container']}>
                <button
                  className={styles['page-button-container-btn']}
                  onClick={this.onButtonClick.bind(this)}
                >
                  Generate Events
                </button>
              </div>
            )}

            {this.state.hostElement !== null &&
              this.state.hostElement !== '' && (
                <div className={styles['page-conditional-container']}>
                  <p className={styles['page-conditional-message']}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `The event type was ${this.state.hostElement}`,
                      }}
                    />
                  </p>
                </div>
              )}
          </div>
          <div className={styles['page-detail']}>
            <HomeDetailComponent
              content={
                <ToDoPageModule header="Cosmos TODO" caption="Welcome To DO" clickEvent={() => {
                  this.setTasks();
                }} tasks={this.tasks}/>
              }
            />
          </div>
        </div>
      </>
    );
  }
}
