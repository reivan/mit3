import React, { useState, useEffect } from 'react'

type TodoItem = {
  id: Number,
  title: String,
}

export function TodoApp() {
  const [text, setText] = useState('')
  const [list, setList] = useState<TodoItem[]>([])

  useEffect(() => {
    (async () => {
      const todos = await storage.getTodos()

      setList(todos)
    })()
  }, [])

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      title: text,
    }

    const newList = [...list, newTodo]
    setList(newList)
    setText('')

    storage.saveTodos(newList)
  }

  function deleteTodo(id: Number) {
    const newList = list.filter(todo => todo.id !== id)
    setList(newList)

    storage.saveTodos(newList)
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="w-full h-10 px-2 mb-2 bg-stone-700 rounded"
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="new todo..."
        />
      </form>

      <div>
        {list.map(item => (
          <div
            className="py-2 select-none"
            key={item.id as React.Key}
            onDoubleClick={() => deleteTodo(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  )
}

const storage = {
  getTodos: async () => {
    let todos = []

    try {
      const savedState = localStorage.getItem('todos')
      todos = JSON.parse(savedState || '[]')
    } catch (error) {
      console.error(error)
    }

    return todos
  },
  saveTodos: async (todos: TodoItem[]) => {
    const jsonTodos = JSON.stringify(todos)
    localStorage.setItem('todos', jsonTodos)
  }
}