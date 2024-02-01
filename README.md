## Plein Air Challenge

This was made by using expo!

It was started by using a bare React Native project, but I started having issues for installing Async Storage. Mismatching ruby version in my local environment, and stuff like that.
For that reason, I decided to push it over to an expo implementation _(which easily adds Async Storage in its configuration by default)_

### UI / App Running

https://github.com/IgorMing/plein_air_challenge/assets/8928206/99514642-94b2-44bc-ab95-07ffe5bb2d7d

### State Manager

It was made simple, via custom hooks + Context API.
For huge applications, I'd definitely pick up a decent library to make that work, and avoid "Context Hell". For this use case, Custom hooks + Context API is totally enough.

### Structure

- I kept all the codebase into a `src` folder
- `components` folder has all partial components
- each component has an `index.ts` to export its main file, to import it in a better looking way
- `screens` folder will place all the app's screens. But in our case, there's only the initial one. But I kept it anyway.

### Commits

I tried to keep each commit well explained and separated, to make easier the rollback, if necessary.

---

> The codebase has some comments for a soft deletion implementation, in case you prefer it. But I kept it with hard deletion anyways.

---

### Getting started

For running the app locally is quite simple and straightforward.

First, install the dependencies

```shell
$ npm i
```

Now, you can basically run it into your environment

```shell
$ npm run ios
# or npm run android
```

That's it!
Thank you!
