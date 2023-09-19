import React from 'react'
import styles from './Table.module.scss'

const Table = () => {

  const shuffleNumbers = () => {
    const arr = []
    for (let i = 0; i < 25; i++) {
      arr.push(i + 1)
    }
    return arr.sort(() => Math.random() - 0.5);
  }

  const shuffled = shuffleNumbers()

  return (
    <div className={styles.table}>
      {shuffled.map((item) => <div className={styles.cell}>
        {item}
      </div>)}
    </div>
  )
}

export default Table