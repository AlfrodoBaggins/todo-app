<script setup lang="ts">
import { ref, onMounted } from 'vue'
const { get_todos, create_todo } = useTodos()

interface Todo {
  id: number | string
  title: string
}

const todos = ref<Todo[]>([])
const newTodo = ref('')

const loadTodos = async () => {
  todos.value = await get_todos()
}

const submitTodo = async () => {
  if (newTodo.value.trim()) {
    await create_todo(newTodo.value)
    newTodo.value = ''
    await loadTodos()
  }
}

onMounted(loadTodos)
</script>

<template>
  <div class="mx-auto p-10 bg-[#282929] w-full h-full">
    <h1 class="text-2xl text-[#ACB7C7] font-bold mb-4">My Todo App</h1>

    <form @submit.prevent="submitTodo" class="flex gap-2 mb-6">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add a new todo"
        class="border px-4 py-2 w-full rounded"
      />
      <UButton class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Add</UButton>
    </form>

    <UForm>
      <template #default>
        <div class="flex gap-2 mb-6">
          <input
            v-model="newTodo"
            type="text"
            placeholder="Add a new todo"
            class="border px-4 py-2 w-full rounded"
          />
          <UButton class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Add</UButton>
        </div>
      </template>
    </UForm>

    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="p-2 border-b"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
