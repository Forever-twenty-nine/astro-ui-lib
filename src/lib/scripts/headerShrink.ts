const header = document.querySelector("#header");

if (header) {
  window.addEventListener("scroll", () => {
    const shrink = window.scrollY > 40;

    header.classList.toggle("py-2", !shrink);
    header.classList.toggle("py-1", shrink);

    header.classList.toggle("rounded-b-xl", shrink);
    header.classList.toggle("shadow-md", shrink);
    header.classList.toggle("bg-white/90", shrink);
    header.classList.toggle("backdrop-blur", shrink);

    header.classList.toggle("max-w-full", !shrink);
    header.classList.toggle("max-w-screen-xl", shrink);
  });
}
