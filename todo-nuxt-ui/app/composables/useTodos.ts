export const useTodos = () => {
  const baseURL = 'http://127.0.0.1:8000' // your FastAPI base URL

  const get_todos = async () => {
    const response = await fetch(`${baseURL}/todos`)
    return await response.json()
  }

  const create_todo = async (text: string) => {
    const response = await fetch(`${baseURL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: text, done: false }),
    })
    return await response.json()
  }

  return { get_todos, create_todo }
}