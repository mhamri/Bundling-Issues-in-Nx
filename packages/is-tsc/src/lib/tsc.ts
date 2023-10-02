
import { rollup } from "@packages/is-rollup";

export function tsc(): string {
  return 'tsc'+rollup();
}
