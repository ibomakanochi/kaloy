const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "kantooooot <br> (づ˶ᵔ 3 ᵔ˶)づ ╰⋃╯";
    gif.src="https://media.tenor.com/q-SfOJTjbY0AAAAj/amo-te.gif";
    yesBtn.style.visibility = "hidden";
    noBtn.style.visibility = "hidden";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
    question.innerHTML = "you're not supposed to do that";
    question.style.color = "white";
    question.style.fontFamily = "monospace";
    yesBtn.style.visibility = "hidden";
    noBtn.style.visibility = "hidden";
    gif.style.visibility = "hidden";
    document.body.style.backgroundImage = "url('https://static.wikia.nocookie.net/villains/images/6/65/WhiteFace_9613.png/revision/latest?cb=20200323172910')";
    document.body.style.backgroundSize = "400px 400px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundPosition = "center";
});