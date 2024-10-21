export interface Post {
  slug: string;
  title: string;
  summary: string;
  thumbnail: string;
  content: string;
}

export interface Posts {
  posts : Post[]
}

export interface PostURL extends Post {
  url: string;
}
