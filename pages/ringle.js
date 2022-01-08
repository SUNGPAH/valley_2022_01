import styles from '../styles/Home.module.css'



export default function Ringle() {

  return <div>

    <div className={styles.menuContainer}>
      <div className={styles.menuItemActive}>
        economics
      </div>
      <div className={styles.menuItem}>
        Enginneering
      </div>
      <div className={styles.menuItem}>
        Education
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.card}>

        <img src="https://d38emex6h5e12i.cloudfront.net/avatar/e1a010ed2c231c3cbd76ca44a5889624e9ebb1cafe14415275b40d0a5942ed59_73761d6f0771?w=250"
          className={styles.img}
        />
        <div className={styles.content}>
          <span className={styles.title}>rigle</span>
          <span className={styles.desc}>Univers ty off...</span>
          <span className={styles.additional}>Finance</span>
        </div>
      </div>

      <div className={styles.card}>
        <img src="https://d38emex6h5e12i.cloudfront.net/avatar/e1a010ed2c231c3cbd76ca44a5889624e9ebb1cafe14415275b40d0a5942ed59_73761d6f0771?w=250"
          className={styles.img}
        />
        <div className={styles.content}>
          <span className={styles.title}>rigle</span>
          <span className={styles.desc}>Univers ty off...</span>
          <span className={styles.additional}>Finance</span>
        </div>
      </div>
      <div className={styles.card}>

        <img src="https://d38emex6h5e12i.cloudfront.net/avatar/e1a010ed2c231c3cbd76ca44a5889624e9ebb1cafe14415275b40d0a5942ed59_73761d6f0771?w=250"
          className={styles.img}
        />
        <div className={styles.content}>
          <span className={styles.title}>rigle</span>
          <span className={styles.desc}>Univers ty off...</span>
          <span className={styles.additional}>Finance</span>
        </div>
      </div>

      <div className={styles.card}>
        <img src="https://d38emex6h5e12i.cloudfront.net/avatar/e1a010ed2c231c3cbd76ca44a5889624e9ebb1cafe14415275b40d0a5942ed59_73761d6f0771?w=250"
          className={styles.img}
        />
        <div className={styles.content}>
          <span className={styles.title}>rigle</span>
          <span className={styles.desc}>Univers ty off...</span>
          <span className={styles.additional}>Finance</span>
        </div>
      </div>
    </div>
  </div>
}