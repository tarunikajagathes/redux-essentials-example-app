import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(id,name){
        return {
          payload:{
            id:id,
            name:name
          }
        }
      }
    },
  },
})

export const {addUser} = usersSlice.actions
export default usersSlice.reducer
