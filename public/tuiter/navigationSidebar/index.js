
const NavigationSidebar = () => {
    // $('#wd-explore').append
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-house-chimney my-auto"></i> Home</a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-hashtag my-auto"></i> Explore</a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-bell my-auto"></i> Notifications</a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-envelope my-auto"></i> Messages</a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-bookmark my-auto"></i> Bookmarks</a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-list my-auto"></i> List</a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-user my-auto"></i> Profile</a>
        <a class="list-group-item" href="/">
            <i class="fa-solid fa-circle-plus my-auto"></i> More</a>
          <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->
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
