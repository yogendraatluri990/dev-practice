/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import styles from './app.module.scss';

import { HomePage } from '@react-nx/home';

export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <HomePage
          title="React NX"
          message="this is a react tutorial"
          isTag={true}
        />
      </>
    );
  }
}
