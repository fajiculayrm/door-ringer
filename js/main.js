/*--------------------------------------------------/*
 * Nav Bar
/*--------------------------------------------------*/
const hamburger = document.querySelector(".hamburger ");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

/*--------------------------------------------------/*
 * Accordion
/*--------------------------------------------------*/

const contentBox = document.querySelectorAll(".contentBox");
const content = document.querySelectorAll(".content");

contentBox.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        content.forEach((acc) => {
            if (acc.classList.contains("active")) {
                acc.classList.remove("active");
                contentBox.forEach((btn) => {
                    btn.classList.remove("active");
                    btn.firstElementChild.firstElementChild.classList.remove(
                        "active"
                    );
                });
            }
        });

        const panel = btn.lastElementChild;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
        console.log(panel);

        const icon = btn.firstElementChild.firstElementChild;
        icon.classList.toggle("active");
        console.log(icon);
    });
});

/*--------------------------------------------------/*
 * Readmore
/*--------------------------------------------------*/

const rdbtn = document.querySelector(".rdBtn");
const toShow = document.querySelector(".readmore");

rdbtn.addEventListener("click", () => {
    toShow.classList.toggle("active");
});
