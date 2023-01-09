import { PlusCircle, ClipboardText, Trash } from 'phosphor-react'

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

      <div className={styles.areaTasks}>
        <input type="radio" name="" id="check" />
        <label htmlFor="check">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
        <button><Trash size={24}/></button>
      </div>

      <div className={styles.areaTasks}>
        <input type="radio" name="" id="check-1" />
        <label htmlFor="check-1">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
        <button><Trash size={24}/></button>
      </div>

      <div className={styles.areaTasks}>
        <input type="radio" name="" id="check-2" />
        <label htmlFor="check-2">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
        <button><Trash size={24}/></button>
      </div>




      {/* <div className={styles.emptyTasks}>
        <ClipboardText size={56}/>
        <p>Você ainda não tem tarefas cadastradas <br />
        <span>Crie tarefas e organize seus itens a fazer</span></p>
      </div> */}
    </div>
  )
}