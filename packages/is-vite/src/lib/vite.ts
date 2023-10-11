import { esbuild } from '@packages/is-esbuild';
import { rollup } from '@packages/is-rollup';

export function vite(): string {
  return '__IsVite__';
}

export function viteToRollup(): string {
  return '__IsVite__' + rollup();
}

export function ViteToEsbuild(): string {
  return '__IsVite__' + esbuild();
}
