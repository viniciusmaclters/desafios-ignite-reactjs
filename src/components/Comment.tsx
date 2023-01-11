import styles from './Comment.module.css'

import { Trash } from 'phosphor-react'

export function Comment() {
  return (
    <>
      <div className={styles.areaTasks}>
          <input type="radio" name="" id="check" />
          <label htmlFor="check">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
          <button><Trash size={24}/></button>
        </div>
    </>  
  )
}