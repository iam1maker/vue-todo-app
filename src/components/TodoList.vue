<template>
    <div>
        <TodoGroup :status="TodoStatus.Pending" />
        <TodoGroup :status="TodoStatus.InProgress" />
        <TodoGroup :status="TodoStatus.Completed" />
    </div>
</template>

<script setup lang="ts">
import { TodoStatus } from "../type";
import TodoGroup from "./TodoGroup.vue";
</script>
