import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: '' },
    reducers: {
        setFilter: (state, { payload }) => {
           state.filter = payload
        }
    }

})

export const filterReducer = filterSlice.reducer
export const { setFilter } = filterSlice.actions
