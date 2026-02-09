const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const wrapper = document.querySelector(".wrapper");

// YES button
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Kabhi nahi ho sakta 😎";
  gif.src =
    "https://media1.tenor.com/m/VfNHcJ6mcz0AAAAd/roblox-lol-roblox.gif";
  noBtn.style.display = "none";
});

// Move function
function moveNoButton(e) {
  e.preventDefault(); // 🔥 IMPORTANT for mobile

  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// 🖥️ PC
noBtn.addEventListener("mouseenter", moveNoButton);

// 📱 MOBILE (important)
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
noBtn.addEventListener("touchmove", moveNoButton, { passive: false });
