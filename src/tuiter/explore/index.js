import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute 
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <div className="d-flex justify-content-between m-1 py-1">
        <a className="p-0 col text-decoration-none" href="./"><div className="py-2 text-center bg-primary rounded-top border border-secondary text-white">For You</div></a>
        <a className="p-0 col text-decoration-none" href="./"><div className="py-2 text-center rounded-top border-bottom border-secondary text-black">Trending</div></a>
        <a className="p-0 col text-decoration-none" href="./"><div className="py-2 text-center rounded-top border-bottom border-secondary text-black">News</div></a>
        <a className="p-0 col text-decoration-none" href="./"><div className="py-2 text-center rounded-top border-bottom border-secondary text-black">Sports</div></a>
        <a className="p-0 col text-decoration-none" href="./"><div className="py-2 text-center rounded-top border-bottom border-secondary text-black">Entertainment</div></a>
    </div>
     <div className="position-relative mb-2">
       <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="w-100" alt="hello"/>
       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;