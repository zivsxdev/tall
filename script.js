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

// Function to move NO button
function moveNoButton() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// 🖥️ PC → mouse hover
noBtn.addEventListener("mouseover", moveNoButton);

// 📱 MOBILE → touch
noBtn.addEventListener("touchstart", moveNoButton);
