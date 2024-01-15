import { createSlice, nanoid } from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
}
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts: {
            prepare: (data) => {
                console.log('data', data)
                const newContact = {
                    ...data,
                    id: nanoid(),
                }
                return { payload: newContact }
            },
            reducer:  (state, { payload }) => {
                state.contacts.push(payload)
            }, 
            removeContact: (state, { payload }) => {
                state.contacts = state.contacts.filter((el) => el.id !== payload)
            }
        }
    }
})

export const contactsReducer = contactsSlice.reducer
export const { addContacts, removeContact } = contactsSlice.actions
