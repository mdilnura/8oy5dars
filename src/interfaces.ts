export interface User {
  id: number;
  login: string;
  name: string;
  company: string | null;
  followers: number;
  following: number;
  avatar_url: string;
  created_at: string;
  public_repos: number;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  html_url: string;
  blog: string;
}
