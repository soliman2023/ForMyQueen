// script.js
// Function to open the modal
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const downloadLink = document.getElementById("downloadLink");
  
    // Set the full-size image source
    fullImage.src = imageSrc;
  
    // Set the download link
    downloadLink.href = imageSrc;
    downloadLink.download = imageSrc.split("/").pop(); // Set the download filename
  
    // Display the modal
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
  // Close modal if user clicks outside the image
  window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Function to handle likes
  function likePhoto(photoId) {
    // Get the current likes from local storage
    let likes = localStorage.getItem(photoId) || 0;
    likes = parseInt(likes) + 1;
  
    // Save the updated likes to local storage
    localStorage.setItem(photoId, likes);
  
    // Update the like count on the page
    document.getElementById(`${photoId}-likes`).textContent = likes;
  }
  
  // Load likes from local storage when the page loads
  window.onload = function () {
    const photos = ["photo1", "photo2", "photo3"];
    photos.forEach((photoId) => {
      const likes = localStorage.getItem(photoId) || 0;
      document.getElementById(`${photoId}-likes`).textContent = likes;
    });
  };