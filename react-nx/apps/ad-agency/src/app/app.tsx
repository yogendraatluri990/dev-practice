// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';


import {HomeFeatureShellWeb} from '@react-nx/home';


export class App extends React.Component {
  render(): React.ReactNode {
      return (
        <div>
          <HomeFeatureShellWeb title='React Native' message='Welcome to react native class'/>
        </div>
      )
  }
}
