# A Repository About Bundling Issues in Nx

I wanted to prove that nx doesn't use previous build results. meaning that builds doesn't do anything with each other and you are transpiling the same file again and again with different compilers.

## How This Project Is Organized:

There is node project named "is-node", and there are packages: `esbuild`, `vite`, `rollup`.

All packages have a dependency on each other, but depends on what you want to test you can uncomment necessary usage.

each package is customized with a plugin to replace a text during build. Appearance of text without the replacement of the text is an indicator that nx isn't using the result of previous build steps.

1. create an empty nx project
2. create a rollup project using @nx/js
3. add a plugin to rollup project to replace text during the build
   > in rollup project we have \_\_IsRollup\_\_ and
   > ![image](https://github.com/nrwl/nx/assets/8991783/4c6da246-315e-4ea3-a082-133f18a51c22)

> we set a plugin to replace the text
> ![image](https://github.com/nrwl/nx/assets/8991783/f3c60667-9ebd-49f3-952f-cd7364e1845c)

4. create a vite Project using @nx/js
5. add a plugin to vite project to replace text during the build

> in vite project we use rollup()
> ![image](https://github.com/nrwl/nx/assets/8991783/770d7484-1859-4d7b-b276-be91285d9b96)

> configure the vite plugin to replace **IsVite** > ![image](https://github.com/nrwl/nx/assets/8991783/bf93e34f-203f-4bab-8207-645c5a28679a)

6. repeat the same thing with more type of project (in repo I created esbuild too)
7. build vite project with `nx build is-vite`
8. visit the dist folder and see `__IsRollup__` is **NOT** replaced
   ![image](https://github.com/nrwl/nx/assets/8991783/de345b30-b154-4d8b-9a15-a75aa346f240)

**by here you can stop, you already saw that build is broken but if you want to test more**

9. add a nodejs project with @nx/node
10. call viteToRollup()
    ![image](https://github.com/nrwl/nx/assets/8991783/e6387ae3-5514-4871-baab-7ae3bd20dc4a)

11. see output that `__IsVite__` is replaced but `__IsRollup__` is **NOT**
    ![image](https://github.com/nrwl/nx/assets/8991783/360f2e16-3267-4a31-96cd-196eec4072f8)

## How to Test:

Run `nx build is-node --skip-nx-cache`. This will build all four packages. Let's then view the `dist` folder and dissect each one.

Let's start with the packages:

#### Rollup

If we check the Rollup dist folder in `dist\packages\is-rollup\index.cjs.js`, we can see that only the \_\_IsRollup\_\_ is replaced none of the other text is replaced

#### Esbuild

If we check the Esbuild dist folder in `dist\packages\is-esbuild\index.cjs`, we can see that only the \_\_IsEsbuild\_\_ is replaced none of the other text is replaced

#### Vite

If we check the Vite dist folder in `dist\packages\is-vite\index.js`, we can see that only the \_\_IsVite\_\_ is replaced none of the other text is replaced
