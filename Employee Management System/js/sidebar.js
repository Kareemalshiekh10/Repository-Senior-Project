document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const toggleBtn = document.querySelector('.toggle-btn');

    function toggleSidebar() {
        const isSidebarVisible = sidebar.style.left === "0px" || sidebar.style.left === "";
        if (isSidebarVisible) {
            sidebar.style.left = "-250px";
            content.style.marginLeft = "0";
        } else {
            sidebar.style.left = "0";
            content.style.marginLeft = "250px";
        }
    }

    toggleBtn.addEventListener('click', toggleSidebar);

    function adjustInitialState() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            sidebar.style.left = "-250px";
            content.style.marginLeft = "0";
        } else {
            sidebar.style.left = "0";
            content.style.marginLeft = "250px";
        }
    }

    // Call adjustInitialState initially to set the correct state on page load
    adjustInitialState();

    window.addEventListener('resize', adjustInitialState);
});