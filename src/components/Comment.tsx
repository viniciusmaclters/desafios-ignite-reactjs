import styles from './Comment.module.css'

import { Trash } from 'phosphor-react'

interface CommentProps {
  content: string
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <>
      <div className={styles.areaTasks}>
          <input type="radio" name="" id="check" />
          <label htmlFor="check">{content}</label>
          <button onClick={handleDeleteComment} title='Deletar To-Do'><Trash size={24}/></button>
        </div>
    </>  
  )
}