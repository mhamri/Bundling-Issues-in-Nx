import { vite } from '@packages/is-vite';

export function vite2(): string {
  return '__IsVite2__' + vite();
}
