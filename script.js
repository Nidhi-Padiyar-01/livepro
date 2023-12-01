document.addEventListener("DOMContentLoaded", function () {
    var navbarItems = document.querySelectorAll(".navbar a");

    navbarItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Remove the 'active' class from all items
            navbarItems.forEach(function (innerItem) {
                innerItem.classList.remove("active");
            });

            // Add the 'active' class to the clicked item
            item.classList.add("active");
        });
    });
});
