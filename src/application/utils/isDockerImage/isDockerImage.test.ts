import { describe, it, expect } from 'vitest';
import { isDockerImage } from './isDockerImage'

describe('isDockerImage', () => {
  it('should return true for valid Docker image strings', () => {
    expect(isDockerImage('myrepo/my-image:1.0.0')).toBe(true);
    expect(isDockerImage('ubuntu')).toBe(true);
    expect(isDockerImage('nginx:latest')).toBe(true);
    expect(isDockerImage('gcr.io/my-project/my-image')).toBe(true);
  });

  it('should return false for invalid Docker image strings', () => {
    expect(isDockerImage('not-docker')).toBe(false);
    expect(isDockerImage('myrepo/my-image:')).toBe(false);
    expect(isDockerImage('myrepo/')).toBe(false);
    expect(isDockerImage(':latest')).toBe(false);
    expect(isDockerImage('myrepo/@invalid!')).toBe(false);
  });

  it('should handle edge cases correctly', () => {
    expect(isDockerImage('myrepo/my-image:1.0.0.0.1')).toBe(true);
    expect(isDockerImage('myrepo/my-image')).toBe(true);
    expect(isDockerImage('myrepo/my-image-with-hyphens')).toBe(true);
    expect(isDockerImage('myrepo/my_image_with_underscores')).toBe(true);
  });
});
