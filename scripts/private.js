// Switching the Groups and Private divs
const groupsbtn = document.querySelector(".groups-button");
const privatesbtn = document.querySelector(".private-button");
const groupslist = document.querySelector(".groups-list");
const privateslist = document.querySelector(".privates-list");

groupsbtn.addEventListener("click", function() {
    groupslist.style.display = "flex";
    privateslist.style.display = "none";
    groupsbtn.classList.add("tabs-active");
    privatesbtn.classList.remove("tabs-active");
});

privatesbtn.addEventListener("click", function() {
    groupslist.style.display = "none";
    privateslist.style.display = "flex";
    privatesbtn.classList.add("tabs-active");
    groupsbtn.classList.remove("tabs-active");
});

// Opening the New Chat modal
var modal = document.querySelector(".newchat-modal");
var btn = document.querySelector(".new_chat_btn");

// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
    modal.style.display = "flex";
});

// When the user clicks anywhere outside of the second modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } 
};
  