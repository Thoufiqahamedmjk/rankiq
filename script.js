// SplitType + GSAP animation for hero title
document.addEventListener("DOMContentLoaded", () => {
    const title = new SplitType("#hero-title", { types: "words, chars" });

    gsap.from(title.chars, {
        y: 40,
        opacity: 0,
        rotateX: 80,
        stagger: 0.015,
        duration: 0.8,
        ease: "power3.out"
    });
});