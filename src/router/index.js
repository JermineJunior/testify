import { createMemoryHistory, createRouter } from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Editor from "@/views/Editor.vue";
import Task from "@/views/Task.vue";
import TaskRun from "@/views/TaskRun.vue";
import Results from "@/views/Results.vue";

const routes = [
  { path: "/", name: "dashboard", component: Dashboard },
  { path: "/editor", name: "editor", component: Editor },
  { path: "/tasks", name: "tasks", component: Task },
  { path: "/run", name: "run", component: TaskRun },
  { path: "/results", name: "results", component: Results },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
