import { createSlice } from '@reduxjs/toolkit'

export const ItemList = createSlice({
     name: 'list',
     itemList: [],
     initialState: [
     ],
     editMode : false,
     setName: '',
     reducer:{
          addListItem: (state, action) => {
               console.log(state.itemList);
               let name = action.payload.name
               let quantity = action.payload.quantity
               state.itemList.push({
                   name,
                   quantity
               })
               // state.viewFormEditSpace = false
           },
           updateListItem: (state, action)=>{
               let id = action.payload.id
               let name = action.payload.name
               let quantity = action.payload.quantity
               let index = state.itemList.findIndex(s => {
                   return s.id === id 
               })
               state.itemList[index].name = name
               state.itemList[index].quantity = quantity
               // state.viewFormEditSpace = false
           },
           deleteItemList: (state, action) => {
               state.itemList = state.itemList.filter(item => !state.itemList.includes(item.id))
               // state.spacesToDelete = []
           },
           setEditMode: (state,action) =>{
               state.ItemList.editMode = ! action.payload.editMode
           },
           setName: (state, action) =>{
               state.name = action.payload
           }
     }
}) ;

export const {
     addListItem,
     updateListItem,
     deleteItemList,
     setEditMode,
} = ItemList.actions;

export default ItemList.reducer;