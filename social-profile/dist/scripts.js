
const btnEl = document.getElementById('btn')
let statusFromLocalStorage =JSON.parse(localStorage.getItem("following"))
let isFollowing = false
if(statusFromLocalStorage){
    isFollowing = statusFromLocalStorage
}
updateFollowBtn()

btnEl.addEventListener('click', ()=>{
     isFollowing = !isFollowing
     localStorage.setItem("following",JSON.stringify(isFollowing))
     updateFollowBtn()
})

function updateFollowBtn(){
    if(isFollowing){
        btnEl.innerText = "Following"
        console.log("followed") 
     }else{
         btnEl.innerText = "Follow"
         console.log("Unfollowed")
     }
}