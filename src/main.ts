import "./style.css";
import { getData } from "./request";
import { updateMainUi } from "./updateUi";
import type { User } from "./interfaces";
const searchForm = document.getElementById("searchWrapper") as HTMLFormElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = searchInput.value.trim();
  if (!username) {
    alert("Iltimos, GitHub username kiriting!");
    return;
  }

  try {
    const data = await getData<User>(
      `https://api.github.com/users/${username}`
    );
    updateMainUi(data);
  } catch (error) {
    console.log(error);
  }
});

//darck mode
const toggleBtn = document.querySelector(".toggle-btn") as HTMLImageElement;
const toggleText = document.querySelector(".darkmode__span") as HTMLSpanElement;

toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "light") {
    html.setAttribute("data-theme", "dark");
    toggleBtn.src = "./moon.svg";
    toggleText.textContent = "DARK"; 
  } else {
    html.setAttribute("data-theme", "light");
    toggleBtn.src = "./sun.svg";
    toggleText.textContent = "LIGHT"; 
  }
});
