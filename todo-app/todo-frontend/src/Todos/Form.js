import React, { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [text, setText] = useState('')

  const onChange = ({ target }) => {
    setText(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('this was the fix')
    createTodo({ text })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" value={text} onChange={onChange} />
      <button type="submit"> Submit </button>
    </form>
  )
}

export default TodoForm
