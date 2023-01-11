import { PlusCircle, ClipboardText} from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Comment } from './Comment'

import styles from './Todo.module.css'

export function Todo() {
  const [comments, setComments] = useState([
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  return (
    <div>
      <form onSubmit={handleCreateNewComment} className={styles.todo}>
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

      <div>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>





      {/* <div className={styles.emptyTasks}>
        <ClipboardText size={56}/>
        <p>Você ainda não tem tarefas cadastradas <br />
        <span>Crie tarefas e organize seus itens a fazer</span></p>
      </div> */}
    </div>
  )
}