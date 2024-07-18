import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialData from '../PhoneList.json'; 

const contactInitialState = {
  items: initialData
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
    
      action.payload.id=nanoid();//сгенерить ид-ку
      state.items.push(action.payload); 
      
        },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
export const contactsSelector = (state) => state.contacts.items;
