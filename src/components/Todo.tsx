import { PlusCircle, ClipboardText } from 'phosphor-react'

import styles from './Todo.module.css'

export function Todo() {
  return (
    <div>
      <form className={styles.todo}>
        <input type="text" name="" id="" placeholder='Adicione uma tarefa'/>
        <button type='submit'>Criar <PlusCircle size={16} /></button>
      </form>

      <div className={styles.tasks}>
        <div className={styles.createTasks}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div className={styles.finishTasks}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>

      <div className={styles.emptyTasks}>
        <ClipboardText size={56}/>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}