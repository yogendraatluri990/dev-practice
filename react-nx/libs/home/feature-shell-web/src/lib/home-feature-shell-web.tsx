import React from 'react';
import styles from './home-feature-shell-web.module.scss';

/* eslint-disable-next-line */
export interface HomeFeatureShellWebProps {
  message:string;
  title: string;
}

// export function HomeFeatureShellWeb(props: HomeFeatureShellWebProps) {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to HomeFeatureShellWeb!</h1>
//     </div>
//   );
// }




export class HomeFeatureShellWeb extends React.Component<HomeFeatureShellWebProps> {

  render(): React.ReactNode {
      return (
        <div className={styles.container}>
          <h1 className={styles['container--title']}>
            {this.props.title}
          </h1>
          <p className={styles['container--message']}>{this.props.message}</p>
        </div>
      )
  }

}