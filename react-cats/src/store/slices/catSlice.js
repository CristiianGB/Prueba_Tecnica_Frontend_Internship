import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name: "cat",
    initialState:{
        catList: [],
        catNames: [
            "Luna", "Simba", "Mia", "Toby", "Nala", "Leo", "Cleo", "Max", "Sasha", "Oliver",
            "Bella", "Charlie", "Lucy", "Oscar", "Zoe", "Milo", "Chloe", "Rocky", "Lily", "Jack",
            "Sophie", "Sam", "Lola", "Teddy", "Lily", "Shadow", "Coco", "Peanut", "Mochi", "Finn",
            "Ruby", "Whiskers", "Mittens", "Tiger", "Kitty", "Oreo", "Gizmo", "Smokey", "Princess",
            "Pumpkin", "Misty", "Salem", "Zeus", "Harley", "Casper", "Ziggy", "Jasper", "Willow",
            "Blue"
          ]
    },
    reducers:{
        addCat: (state, action) => {
            state.catList = [...state.catList, action.payload]
        },
        deleteCat: (state, action) => {
            
            state.catList = state.catList.filter(cat=>
                 cat.id!==action.payload
                 )
        }
    }
})

export const { addCat } = catSlice.actions;
export const { updateCat } = catSlice.actions;
export const { deleteCat } = catSlice.actions;