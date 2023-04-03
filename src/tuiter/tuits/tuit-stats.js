import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        const liked = !tuit.liked;
        const addOrRemove = liked ? 1 : -1;
        dispatch(updateTuitThunk({...tuit, liked: liked, likes: tuit.likes + addOrRemove}))
    };

    const dislikeTuitHandler = (tuit) => {
        const disliked = !tuit.disliked;
        const addOrRemove = disliked ? 1 : -1;
        dispatch(updateTuitThunk({...tuit, disliked: disliked, dislikes: tuit.dislikes + addOrRemove}))
    };

    return(
    <div className="row pt-1">
        <div className="col 2">
            <i className="bi bi-chat"></i> {tuit.replies}
        </div>

        <div className="col 2">
            <i className="bi bi-arrow-left-right"></i> {tuit.retuits}
        </div>

        <div className="col 2">
            <i onClick={()=>likeTuitHandler(tuit)}
                className={`bi ${tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"}`}></i> {tuit.likes}
        </div>

        <div className="col 2">
            <i onClick={()=>dislikeTuitHandler(tuit)}
                className={`bi ${tuit.disliked ? "bi-hand-thumbs-down-fill text-primary" : "bi-hand-thumbs-down"}`}></i> {tuit.dislikes}
        </div>

        <div className="col 2">
            <i className="bi bi-share"></i>
        </div>
    </div>
    );
};

export default TuitStats