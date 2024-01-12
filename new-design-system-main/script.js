document.addEventListener("DOMContentLoaded", function () {
    const insertViolationButton = document.querySelector(".button-container .button:nth-child(1)");
    const renderCommunityServiceButton = document.querySelector(".button-container .button:nth-child(2)");
    const backToHomeLinks = document.querySelectorAll(".back-to-home");

    function navigateToInsertData() {
        window.location.href = "insert-data.html";
    }

    function navigateToCommunityServiceRender() {
        window.location.href = "cs-render.html";
    }

    insertViolationButton.addEventListener("click", navigateToInsertData);
    renderCommunityServiceButton.addEventListener("click", navigateToCommunityServiceRender);

    function navigateToHomePage(event) {
        event.preventDefault();
        window.location.href = "homepage.html";
    }

    backToHomeLinks.forEach(function (link) {
        link.addEventListener("click", navigateToHomePage);
    });
});
