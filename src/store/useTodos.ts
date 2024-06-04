import { computed, reactive } from "vue";
import { Todo, TodoStatus } from "../type";

interface TodoStore {
    [TodoStatus.Pending]: Todo[];
    [TodoStatus.InProgress]: Todo[];
    [TodoStatus.Completed]: Todo[];
}

const defautVal = {
    [TodoStatus.Pending]: [],
    [TodoStatus.InProgress]: [],
    [TodoStatus.Completed]: [],
};

const todoStore = reactive<TodoStore>(defautVal);

export default () => {
    const getTodosByStatus = (todoStatus: TodoStatus) => {
        return computed(() => todoStore[todoStatus]);
    };

    return { getTodosByStatus };
};
