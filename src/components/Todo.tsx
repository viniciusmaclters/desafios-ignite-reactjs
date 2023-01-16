import { ClipboardText } from 'phosphor-react'
import { ITaks } from '../App'
import { Comment } from './Comment'

import styles from './Todo.module.css'

interface Props {
  tasks: ITaks[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Todo({ tasks, onDelete, onComplete}: Props) {
  const taskQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.createTasks}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div className={styles.finishTasks}>
          <p>Concluídas</p>
          <span>{completedTasks} de {taskQuantity}</span>
        </div>
      </header>

      <div>
        {tasks.map((task) => (
          <Comment
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.emptyTasks}>
            <ClipboardText size={58} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie Tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}