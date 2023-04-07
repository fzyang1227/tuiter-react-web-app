import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitItem = (
 {
  // example tuit (default)
   tuit = {
    "id": 234,
    "topic": "Space",
    "username": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "https://infosec-jobs.com/media/cache/bb/cc/bbccd9053fcace2a080d3d539e04079a.jpg",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
   }
 }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
       <img width={65} className="mx-auto d-block rounded-circle" alt='' src={`${tuit.image}`}/>
     </div>
     <div className="col-10">
       <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
       <div><b>{tuit.username}</b> <i className="bi bi-patch-check-fill text-primary"></i> {tuit.handle} · {tuit.time}</div>
       <div>{tuit.tuit}</div>
       <TuitStats tuit={tuit}/>
     </div>
   </div>
  </li>
 );
};
export default TuitItem;