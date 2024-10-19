export interface Post {
  slug: string;
  title: string;
  summary: string;
  thumbnail: string;
  content: string;
}

export interface PostURL extends Post {
  url: string;
}
