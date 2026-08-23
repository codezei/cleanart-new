
// import works from './modules/works'
import header from './modules/header'
// import services from './modules/services'
import cta from './modules/cta'
// import process from './modules/process'
import contacts from './modules/contacts'
// import categories from './modules/categories'
import 'regenerator-runtime/runtime';

document.addEventListener('DOMContentLoaded', function () {

	header()
	// services()
	cta()
	// works()
	// process()
	// categories()
	contacts()

    function toggle() {
        let elements = document.querySelectorAll('.js-toggle')
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i]

            let target = element.dataset.target ? element.querySelector(element.dataset.target) : element
            let collapse = element.querySelector(element.dataset.collapse)
            target.addEventListener('click', function (e) {
                element.classList.toggle('is-active')
                // target.classList.toggle('is-active')
                // collapse.classList.toggle('is-active')
            })
        }
    }
    toggle()



    document.querySelectorAll(".video-preview").forEach((preview) => {
        const button = preview.querySelector(".video-preview__play");
        const videoSrc = preview.dataset.video;

        button.addEventListener("click", () => {
            if (!videoSrc) return;

            preview.classList.add("is-loading");

            const video = document.createElement("video");

            video.controls = true;
            video.autoplay = true;
            video.muted = true;
            video.playsInline = true;
            video.loop = true;
            video.preload = "metadata";
            video.src = videoSrc;

            preview.replaceChildren(video);

            video.addEventListener("loadedmetadata", () => {
                video.play().catch(() => { });
            });
        });
    });


    function checkVisibility(options = {}) {
        const elements = document.querySelectorAll('.js-observe');
        if (!elements.length) return;
        const settings = {
            threshold: 0.1,
            rootMargin: '0px',
            once: true,
            ...options
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    if (settings.once) {
                        observer.unobserve(entry.target);
                    }
                } else if (!settings.once) {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, {
            threshold: settings.threshold,
            rootMargin: settings.rootMargin
        });
        elements.forEach(element => observer.observe(element));
    }
    checkVisibility();
})
