import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return(
        <div>
            <div className="list-group">
            <a className="list-group-item" href="./">
                <i className="bi bi-twitter"></i></a>
            <a className={`list-group-item ${active === 'home'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-house-fill col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">Home</div></div></a>
            <a className={`list-group-item ${active === 'explore'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-hash col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">Explore</div></div></a>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-bell-fill col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">Notifications</div></div></a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-envelope-fill col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">Messages</div></div></a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-bookmark-fill col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">Bookmarks</div></div></a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-list-ul col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">List</div></div></a>
            <a className={`list-group-item ${active === 'profile'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-person-fill col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">Profile</div></div></a>
            <a className={`list-group-item ${active === 'more'?'active':''}`} href="./">
                <div className="row"><i className="bi bi-circle-fill col-auto col-xl-2 col-xxl-2 my-auto"></i>
                <div className="d-none d-xl-block col-10">More</div></div></a>
        </div>
        <div className="d-grid mt-2">
            <a href="tweet.html"
            className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
      </div>
    )
};
export default NavigationSidebar;