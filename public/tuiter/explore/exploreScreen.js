import PostSummaryList from "../PostSummaryList/index.js";

const ExploreScreen = () => {
    return(`
    <div id="topbar" class="container-fluid d-flex align-items-center flex-nowrap justify-content-between">
        <div class="position-absolute m-3"><i class="fa-sharp fa-solid fa-magnifying-glass text-muted"></i></div>
        <input class="rounded-pill form-control p-2 px-5" placeholder="Search Tuiter" autocomplete="off"/></span>
        <div class="position-right align-items center">
            <a href="explore-settings.html"><i class="fas fa-gear fa-2x" style="color: rgb(29,161,242)"></i></a>
        </div>
    </div>

    <div class="d-flex justify-content-between m-1 py-1">
        <a class="p-0 col text-decoration-none" href="#"><div class="py-2 text-center bg-primary rounded-top border border-secondary text-white">For You</div></a>
        <a class="p-0 col text-decoration-none" href="#"><div class="py-2 text-center rounded-top border-bottom border-secondary text-white">Trending</div></a>
        <a class="p-0 col text-decoration-none" href="#"><div class="py-2 text-center rounded-top border-bottom border-secondary text-white">News</div></a>
        <a class="p-0 col text-decoration-none" href="#"><div class="py-2 text-center rounded-top border-bottom border-secondary text-white">Sports</div></a>
        <a class="p-0 col text-decoration-none" href="#"><div class="py-2 text-center rounded-top border-bottom border-secondary text-white">Entertainment</div></a>
    </div>

    
    <div class="card mb-1 overflow-hidden">
        <img class="card-img-top img-fluid" src=
        "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
        
        <div class="card-img-overlay d-flex align-items-end card-inverse p-0 px-2">
            <h1 class="text-stroke text-white">
                SpaceX's Starship
            </h1>
        </div>
    </div>
    ${PostSummaryList()}
    `);
}

// $(ExploreScreen)
export default ExploreScreen;
