// Select Elements
const galleryItems = document.querySelectorAll(".gallery-item");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-buttons button");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// =========================
// Lightbox
// =========================

galleryItems.forEach(item => {

    const image = item.querySelector("img");

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// =========================
// Search Filter
// =========================

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    galleryItems.forEach(item => {

        const category = item.className.toLowerCase();

        if (category.includes(value)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

});

// =========================
// Category Filter
// =========================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

            }

            else if (item.classList.contains(filter)) {

                item.style.display = "block";

            }

            else {

                item.style.display = "none";

            }

        });

    });

});