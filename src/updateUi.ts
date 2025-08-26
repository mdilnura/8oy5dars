import type { User } from "./interfaces";

const name = document.getElementById("name") as HTMLSpanElement;
const userName = document.getElementById("userName") as HTMLSpanElement;
const joinedAt = document.getElementById("created_at") as HTMLSpanElement;
const avatar = document.getElementById("avatar") as HTMLImageElement;

export function updateMainUi(user: User) {
  name.textContent = user.name || "Noma'lum";
  userName.textContent = user.twitter_username || user.login;
  joinedAt.textContent = new Date(user.created_at).toLocaleDateString();
  avatar.src = user.avatar_url;
  avatar.alt = user.name || user.login;
}
