import styles from './ad-universe-fields.module.scss';

/* eslint-disable-next-line */
export interface AdUniverseFieldsProps {}

export function AdUniverseFields(props: AdUniverseFieldsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AdUniverseFields!</h1>
    </div>
  );
}

export default AdUniverseFields;
