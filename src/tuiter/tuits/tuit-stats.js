import React from "react";
import {likeTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit));
    }
    return(
    <div className="row pt-1">
        <div className="col-3 m-auto">
            <i className="bi bi-chat"></i> {tuit.replies}
        </div>

        <div className="col-3 m-auto">
            <i className="bi bi-arrow-left-right"></i> {tuit.retuits}
        </div>

        <div className="col-3">
            <i onClick={()=>likeTuitHandler(tuit)}
                className={`bi ${tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"}`}></i> {tuit.liked ? tuit.likes+1 : tuit.likes}
        </div>

        <div className="col-3">
            <i className="bi bi-share"></i>
        </div>
    </div>
    );
};

export default TuitStats