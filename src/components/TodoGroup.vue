<template>
    <div>
        <h3>{{ groupLabel }}</h3>
        <ul>
            <li v-for="todo in pendingTodos" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Todo, TodoStatus } from "../type";

interface Props {
    status: TodoStatus;
}

const props = defineProps<Props>();

const pendingTodos: Todo[] = [
    {
        id: 1,
        title: "Learn Vue",
        description: "Learn Vue 3.0",
        status: TodoStatus.Pending,
    },
];

const groupLabel = computed(() => {
    switch (props.status) {
        case TodoStatus.Pending:
            return "Pending";
        case TodoStatus.InProgress:
            return "In Progress";
        case TodoStatus.Completed:
            return "Completed";
        default:
            return "Unknown";
    }
});
</script>
