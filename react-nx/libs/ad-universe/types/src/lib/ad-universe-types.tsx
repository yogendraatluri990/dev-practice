import styles from './ad-universe-types.module.scss';

/* eslint-disable-next-line */
export interface AdUniverseTypesProps {}

export function AdUniverseTypes(props: AdUniverseTypesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdUniverseTypes!</h1>
    </div>
  );
}

export default AdUniverseTypes;
