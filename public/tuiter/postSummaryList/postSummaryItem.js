// let test = {
//     "topic": "Web Development",
//     "userName": "ReactJS",
//     "time": "2h",
//     "image": "https://files.readme.io/320345b-React_Logo_256x256.png",
//     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
// };

const postSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
        <div class="d-flex justify-content-between">
            <div class="col">
                <small class="text-muted">${post.topic}</small>
                <div class="d-flex align-items-center flex-nowrap">
                    <div class="h6 m-0 me-1"><b>${post.userName}</b></div>
                    <i class="fa-solid fa-circle-check"></i>
                    <small class="ps-2"> - ${post.time}</small>
                </div>
                <p class="m-0"><b>${post.title}</b></p>
            </div>
            <div class="ratio-1x1">
                <img src=${post.image} class="img-fluid bg-white rounded" style="width: 100px; height: 100px; max-width: 100%;">
            </div>
        </div>
    </li>

    `)
}
   
export default postSummaryItem;