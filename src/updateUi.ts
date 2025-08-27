import type { User } from "./interfaces";

const name = document.getElementById("name") as HTMLSpanElement;
const userName = document.getElementById("userName") as HTMLSpanElement;
const joinedAt = document.getElementById("created_at") as HTMLSpanElement;
const avatar = document.getElementById("avatar") as HTMLImageElement;
const bio = document.getElementById("bio") as HTMLSpanElement;
const repos = document.getElementById("repos") as HTMLParagraphElement;
const followers = document.getElementById("followers") as HTMLParagraphElement;
const following = document.getElementById("following") as HTMLParagraphElement;
const location = document.getElementById("location") as HTMLParagraphElement;
const blogEl = document.getElementById("blog") as HTMLAnchorElement;
const githubEl = document.getElementById("github") as HTMLAnchorElement;
const twitterEl = document.getElementById("twitter") as HTMLAnchorElement;

export function updateMainUi(user: User) {
  name.textContent = user.name || "Noma'lum";
  userName.textContent = user.twitter_username || user.login;
  joinedAt.textContent = new Date(user.created_at).toLocaleDateString();
  avatar.src = user.avatar_url;
  avatar.alt = user.name || user.login;
  bio.textContent = user.bio;
  repos.textContent = user.public_repos.toString();
  followers.textContent = user.followers.toString();
  following.textContent = user.following.toString();
  location.textContent = user.location || "Location mavjud emas";
  if (user.blog) {
    blogEl.href = user.blog.startsWith("http")
      ? user.blog
      : `https://${user.blog}`;
    blogEl.textContent = user.blog;
  } else {
    blogEl.textContent = "Blog mavjud emas";
    blogEl.removeAttribute("href");
  }
  githubEl.href = user.html_url;
  githubEl.textContent = "GitHub profiliga o'tish";
  if (user.twitter_username) {
    twitterEl.href = `https://twitter.com/${user.twitter_username}`;
    twitterEl.textContent = `@${user.twitter_username}`;
  } else {
    twitterEl.textContent = "Twitter mavjud emas";
    twitterEl.removeAttribute("href");
  }
}
