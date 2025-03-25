const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return {
        color: `rgb(${r},${g},${b})`,
        r: r,
        g: g,
        b: b
    };
};

const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', function () {
    const { color, r, g, b } = randomColor();
    document.body.style.backgroundColor = color;
    p.innerText = `The RGB code for this color is (${r},${g},${b}).`;
});




