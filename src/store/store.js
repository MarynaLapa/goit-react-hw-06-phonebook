import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./sliceContacts";
import { filterReducer} from "./sliceFilter";

const reducer = {
    filter: filterReducer,
    contacts: contactsReducer,
}

export const store = configureStore({ reducer })
