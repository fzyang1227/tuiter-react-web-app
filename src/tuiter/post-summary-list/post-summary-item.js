import React from "react";
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "https://climatescape.org/static/3aac0ee0e7eb6597bcd2447e173e69ce/91bed/mVYj_YOd6i7fEl6cqcwQ-K8X1_SuDBJfN92ZnzOlul8.png"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{post.userName} . {post.time}</div>
       <div className="fw-bolder">{post.topic}</div>
       <div>{post.title}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`${post.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default PostSummaryItem;