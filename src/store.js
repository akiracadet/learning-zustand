import {createWithEqualityFn} from 'zustand/traditional'

export const useStore = createWithEqualityFn((set) => ({
  tasks: [{title: 'TestTask', state: 'PLANNED'}],
  draggedTask: null,
  setDraggedTask: (title) => set({draggedTask: title}),
  addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})),
  deleteTask: (title) => set((store) => ({tasks: [store.tasks.filter((task) => task.title !== title)]})),
  moveTask: (title, state) => set((store) => ({tasks: store.tasks.map(task => task.title === title ? {title, state} : task)}))
}))
