import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://styles.redditmedia.com/t5_k5gc6/styles/profileIcon_ydyqarnwt7s91.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=77a410a48a906e94c2c113eafe0299c9bccd6d27' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={`${who.avatarIcon}`}/>
     </div>
     <div className="col-8">
       <div className="fw-bold">{who.userName}</div>
       <div>@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};

export default WhoToFollowListItem;