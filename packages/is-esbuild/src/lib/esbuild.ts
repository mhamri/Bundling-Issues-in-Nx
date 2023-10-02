import { rollup } from "@packages/is-rollup";

export function esbuild(): string {
  function notUsed(){
    //empty
  };
  return 'esbuild'+rollup();
}
