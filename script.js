document.querySelectorAll(".open-contact-modal").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("modal-background").classList.remove("hidden");
        document.getElementById("contact-modal").classList.remove("hidden");
    });
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("modal-background").classList.add("hidden");
    document.getElementById("contact-modal").classList.add("hidden");
});

document.getElementById("modal-background").addEventListener("click", function() {
    document.getElementById("modal-background").classList.add("hidden");
    document.getElementById("contact-modal").classList.add("hidden");
});

document.getElementById("email-link").addEventListener("click", function() {
    var email = "yelenavk" + "@" + "gmail" + ".com";
    window.location.href = "mailto:" + email;
});

document.getElementById("scroll-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});