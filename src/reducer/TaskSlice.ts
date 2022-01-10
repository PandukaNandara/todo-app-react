import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskModel from "../models/TaskModel";

interface TaskState {
  tasks: TaskModel[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  // With async function
  extraReducers: {},

  // Without async function
  reducers: {
    addNewTask: (state, action: PayloadAction<TaskModel>) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    markAsDone: (state, action: PayloadAction<TaskModel>) => {
      const task = action.payload;
      const list = state.tasks.map((t) =>
        task.date === t.date ? { ...t, done: true } : t
      );
      state.tasks = list;
    },
  },
});

export const { addNewTask, markAsDone } = taskSlice.actions;

export default taskSlice.reducer;
