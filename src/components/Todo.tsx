import { PlusCircle } from 'phosphor-react'

import styles from './Todo.module.css'

export function Todo() {
  return (
    <div>
      <form className={styles.todo}>
        <input type="text" name="" id="" placeholder='Adicione uma tarefa'/>
        <button type='submit'>Criar <PlusCircle size={16} /></button>
      </form>

      <div className={styles.tasks}>
        <p>Tarefas criadas <span>0</span></p>
        <p>Concluídas <span>0</span></p>
      </div>
    </div>
  )
}