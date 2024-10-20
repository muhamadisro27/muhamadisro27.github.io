export interface RepoProps {
  repos: Record<string, string>[];
}

export interface Repo {
  name: string;
  url: string;
  summary: string;
  updatedAt: string;
}
