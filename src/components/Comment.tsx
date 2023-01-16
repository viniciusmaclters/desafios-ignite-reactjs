import styles from './Comment.module.css'

import { CheckCircle, Trash } from 'phosphor-react'
import { ITaks } from '../App'

interface Props {
  task: ITaks
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Comment({ task, onComplete, onDelete }: Props) {
  return (
    <div className={styles.areaTasks}>
      <button className={styles.check} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle size={24} /> : <div />} 
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={20}/>
      </button>
    </div> 
  )
}