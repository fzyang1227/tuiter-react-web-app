// let exampleObject = {
//     avatarIcon: 'https://cdn.worldvectorlogo.com/logos/virgin-1.svg',
//     userName: 'Virgin Galactic',
//     handle: 'virgingalactic',
// };  

const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item p-0">
        <div class="container-fluid d-flex justify-content-between align-items-center p-2">
            <div class="container-fluid d-flex p-0">
            <div class="me-1">
                <img class="wd-icons" src=${who.avatarIcon}>
            </div>
            <div>
                <div class="d-flex align-items-center flex-nowrap">
                    <div class="h6 m-0 me-1">${who.userName}</div>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <small>@${who.handle}</small>
            </div>
            </div>
            <div><span class="badge bg-primary rounded-pill"><p class="m-1">Follow</p></span></div></div>
    </li>
    `)
}

export default WhoToFollowListItem