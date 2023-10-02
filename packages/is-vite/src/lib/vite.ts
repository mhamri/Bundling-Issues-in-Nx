import { rollup } from "@packages/is-rollup";

export function vite(): string {
  return 'vite'+rollup();
}
