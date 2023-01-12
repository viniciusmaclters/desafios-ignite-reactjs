import styles from './App.module.css'
import { Header } from './components/Header'
import { Todo } from './components/Todo'

import './global.css'


const todos = [
 { 
    id: 1,
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
          {todos.map(todo => {
            return (
              <Todo
                key={todo.id}
              /> 
            )
          })}
      </div>
    </>
  )
}


