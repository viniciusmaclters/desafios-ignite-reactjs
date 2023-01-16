import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import todoLogo from '../assets/Logo.png'

import styles from './Header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do To-Do" />

      <form className={styles.create} onSubmit={handleSubmit}>
        <input 
          value={title} 
          onChange={onChangeTitle} 
          placeholder='Adicione uma nova tarefa' 
        />

        <button>Criar <PlusCircle size={20}/></button>
      </form>
    </header>
  )
}