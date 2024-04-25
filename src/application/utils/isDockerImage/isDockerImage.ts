export function isDockerImage(image: string): boolean {
  const dockerImageRegex = /^(?:[a-zA-Z0-9._-]+\/)?[a-zA-Z0-9._-]+(?::[a-zA-Z0-9._-]+)?$/;
  return dockerImageRegex.test(image);
}
