import styles from './App.module.css'
import { Header } from './components/Header'
import { Todo } from './components/Todo'

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
          <Todo />
      </div>
    </>
  )
}


