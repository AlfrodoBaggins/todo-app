<script setup lang="ts">
import { ref, onMounted } from 'vue'
const { get_todos, create_todo } = useTodos()

interface Todo {
  id: number | string
  task: string
}

const todos = ref<Todo[]>([])
const form = ref({
    task: '',
    done: false,
})

const loadTodos = async () => {
  todos.value = await get_todos()
}

const submitTodo = async () => {
  if (form.value.task.trim()) {
    await create_todo(form.value.task)
    form.value.task = ''
    await loadTodos()
  }
}

onMounted(loadTodos)
</script>

<template>
  <div class="mx-auto p-10 w-full h-full">
    <h1 class="text-2xl text-[#ACB7C7] font-bold mb-4">My Todo App</h1>

    <UForm :state="form" @submit="submitTodo">
      <UFormField label="Add Task">
        <UInput v-model="form.task" placeholder="Add task here..." variant="outline" highlight/>
      </UFormField>
      <UButton type="submit" color="primary" variant="solid">Submit</UButton>
    </UForm>

    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="p-2"
      >
        {{ todo.task }}
      </li>
    </ul>
  </div>
</template>
