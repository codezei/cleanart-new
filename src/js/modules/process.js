export default function () {
    const sliders = document.querySelectorAll('.beer-slider');

    sliders.forEach(slider => {
        new BeerSlider(slider);
    });
}
