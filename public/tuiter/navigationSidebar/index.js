
const NavigationSidebar = () => {
    // $('#wd-explore').append
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-house-chimney col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">Home</div></div></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-hashtag col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">Explore</div></div></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-bell col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">Notifications</div></div></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-envelope col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">Messages</div></div></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-bookmark col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">Bookmarks</div></div></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-list col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">List</div></div></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-user col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">Profile</div></div></a>
        <a class="list-group-item" href="/">
            <div class="row"><i class="fa-solid fa-circle-plus col-auto col-xl-2 col-xxl-2 my-auto"></i>
            <div class="d-none d-xl-block col-10">More</div></div></a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }

//$(NavigationSidebar)

export default NavigationSidebar;
