document.getElementById("revealMore").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfo");
    moreInfo.classList.toggle("hidden");

    // Change button text based on visibility
    if (moreInfo.classList.contains("hidden")) {
        this.innerText = "Learn More";
    } else {
        this.innerText = "Show Less";
    }
});
