# A repo about bundling issue in Nx

## how this project is organized:

![Alt text](<document/nx graph.png>)

there is an angular project named `is-angular`. And
there are 4 packages, `esbuild`, `vite`, `tsc` and `rollup`

All packages have a dependency to `rollup` and 
`rollup` is customized with a plugin to prove that none of these packages use the result of build as part of their bundling and transpilation

question arise such as:
1- the memory and load that is on each package/app build. instead of one time build and many time use, each usage graph is loaded by the each build
2- can't enjoy faster bundlers like esbuild in combination with legacy bundlers like webpack as webpack run it's own set of optimization and esbuild make its own, but result and performance of each dosen't affect another one as each one do it's own transpiling.
3- what exactly caching do? 
4- some command like `ng serve` become much slower in nx as result of how all the packages need to get loaded into the webpack, instead of result of each package get loaded into that

## how to test 

run `nx build is-angular --skip-nx-cache` this will build all 4 packages then let's view the dist folder and dissect each 

let's start with the packages:

#### rollup
this is the package that is every other package is depends on has a plugin to replace build date time
if you check `dist\packages\is-rollup\index.cjs.js` you can see that it works well. 

![roll up dist result](document/rollup_dist_result.png)

#### esbuild 
if we check the esbuild dist folder in `dist\packages\is-esbuild\index.cjs` we can see that it didn't use the result of tsc bundler and instead bundled it with esbuild 

![esbuild dist result](document/esbuild_dist_result.png)

#### vite
if we check the esbuild dist folder in `dist\packages\is-vite\index.js` we can see that it didn't use the result of tsc bundler and instead bundled it with esbuild 

![Alt text](document/vite_dist_result.png)

#### tsc
it's hard to tell, because the tsc requires a package

![tsc dist result](document/tsc_dist_result.png)

#### angular 

if we go to `dist\apps\is-angular` and type `(p)npx serve` we can see that the angular also didn't use nx build result

![angular dist result](document/angular_dist_result.png)





