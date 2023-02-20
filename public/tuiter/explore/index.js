/* eslint-env jquery */
import NavigationSidebar from "../navigationSidebar/index.js";
import WhoToFollow from "../whoToFollowList/index.js";
import ExploreScreen from "./exploreScreen.js";

function exploreComponent() {
    $('#wd-explore').append(`
    <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
            ${ExploreScreen()}
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollow()}
        </div>
    </div>
     
    `);
 }
 
 $(exploreComponent);