import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://styles.redditmedia.com/t5_k5gc6/styles/profileIcon_ydyqarnwt7s91.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=77a410a48a906e94c2c113eafe0299c9bccd6d27",
   };
   
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2s",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }; 
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    deleteTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.splice(index, 1);
      },   
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    likeTuit(state, action) {
        const tuit = state.find((tuit) =>
              tuit._id === action.payload._id);
        tuit.liked = !tuit.liked;
    }, 
  }
});
 
export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;