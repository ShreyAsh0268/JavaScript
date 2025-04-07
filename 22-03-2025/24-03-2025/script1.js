function addImage() {
    let imageURL = document.getElementById("imageURL").value.trim();
    
    if (imageURL === "") {
        alert("Please enter a valid image URL!");
        return;
    }

    let gallery = document.getElementById("gallery");

    // Create image container
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create image element
    let img = document.createElement("img");
    img.src = imageURL;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        gallery.removeChild(imageContainer);
    };

    // Append image and button to container
    imageContainer.appendChild(img);
    imageContainer.appendChild(deleteBtn);
    
    // Append to gallery
    gallery.appendChild(imageContainer);

    // Clear input field
    document.getElementById("imageURL").value = "";
}
