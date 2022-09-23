const logoBtn = document.querySelector(".logo-btn");
const links = document.querySelector(".more-link");
const profileImg = document.querySelector(".main-profile");
const profilePopUp = document.querySelector(".pop-box");
const heartIcon = document.querySelector(".heart-icon");
const heartPopUp = document.querySelector(".heart-popup-box");
const editContainer = document.querySelector("#edit");
const newPostIcon = document.querySelector(".new-post-icon");
const uploadPostBox = document.querySelector("#share-new-post");


// For Logo button
logoBtn.addEventListener("click", () => {
    links.classList.toggle("active");

    profilePopUp.classList.remove("show");
    heartPopUp.classList.remove("like-box-show");
});

// For Profile box PopUp
profileImg.addEventListener("click", () => {
    profilePopUp.classList.toggle("show");

    links.classList.remove("active");
    heartPopUp.classList.remove("like-box-show");
});

// For Like or Heart Icon

heartIcon.addEventListener("click", () => {
    heartPopUp.classList.toggle("like-box-show");

    profilePopUp.classList.remove("show");
    links.classList.remove("active");
});

// For Share New Post section
newPostIcon.addEventListener("click", () => {
    uploadPostBox.classList.add("post-box-show");
    profilePopUp.classList.remove("show");
    heartPopUp.classList.remove("like-box-show");
    links.classList.remove("active");
});

document.querySelector(".close-button").addEventListener("click", () => {
    uploadPostBox.classList.remove("post-box-show");
});

// For Post Edit Button
document.querySelectorAll(".edit-icon").forEach(event => {
    event.onclick = () => {
        editContainer.classList.add("active");

        profilePopUp.classList.remove("show");
        heartPopUp.classList.remove("like-box-show");
        links.classList.remove("active");
    };
});

document.querySelector(".cancel").addEventListener("click", () => {
    editContainer.classList.remove("active");
});