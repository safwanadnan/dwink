const isProd = process.env.NODE_ENV === 'production';
const repoName = 'nexxt-app'; // Replace with your actual repository name

export function getImagePath(path: string): string {
  if (isProd) {
    return `/${repoName}${path}`;
  }
  return path;
}

export function getBasePath(): string {
  return isProd ? `/${repoName}` : '';
}