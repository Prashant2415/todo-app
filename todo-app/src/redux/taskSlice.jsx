import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice(
    {
        name: "taskSlice",
        initialState: {
            data: [],
            searchItem: "",
            completed: []
        },
        reducers: {
            addTask: (state,action)=>{
                console.log(action.payload)
                state.data.push(action.payload)
            },
            removeTask: (state,action)=>{
                state.data = state.data.filter((item)=> item.id !== action.payload.id)
                const checkItem = state.completed.find((item)=> item.id === action.payload.id)
                if(checkItem)
                {
                    state.completed = state.completed.filter((item)=> item.id !== action.payload.id)
                }
            },
            updateTask: (state, action) => {
                const index = state.data.findIndex((item) => item.id === action.payload.id);
                if (index !== -1) {
                  state.data[index] = action.payload; // Replace the existing task with updated data
                }
            },
            searchTaskItem:(state, action)=>{
                
                state.searchItem = action.payload;
            },
            isCompletedTask: (state, action) => {
                const index = state.data.findIndex((item) => item.id === action.payload.id);
            
                if (index !== -1) {
                    const completedTask = { ...state.data[index], isCompleted: true };
                    
                    // Remove from active tasks
                    state.data.splice(index, 1);
            
                    // Add to completed list only if not already there
                    const existsInCompleted = state.completed.some((item) => item.id === action.payload.id);
                    if (!existsInCompleted) {
                        state.completed.push(completedTask);
                    }
                }
            }
        }
    }
)

export const {addTask, removeTask, updateTask, searchTaskItem, isCompletedTask} = taskSlice.actions
export default taskSlice.reducer;