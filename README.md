# SPG Wireframes - Astro

## Description

This is a repo for a "new"-er SPG website, that you can see on https://beta.spg.dev/books.

This one is built using Astro!

### Why Astro?

The reason we chose Astro is because this app is highly static. The whole application is based on a book (the Suraj Prakash Granth), which lives in a database. The contents of that data isn't really going to change. Meaning, when someone loads `/chapters/123`, it should always load the same page.

And Astro is very good at optimizing these things because it will BUILD these pages in our deployment.

## Getting Started

### Pre-requisites

- Clone and setup [spg2](https://github.com/vidhiya-saagar/spg2) and `rails s` in that repo
- Clone this repo
- Install Node `v22` (e.g. `nvm install 22`)
- Run `yarn install`

### Running Astro Server

Once you have the Rails server running, do:

```
yarn run dev
```

This should open the server on http://localhost:4321/books

## Deployment

This app uses Vercel to deploy over [here](https://vercel.com/is-null/wireframes-astro). For some reason, the Project is named `is-null`. I don't know why, but we should fix that soon lol.

Once something merged, it automatically deploys with Vercel. Ensure we have all the appropriate `env`s setup:

### ENVs

```env
API_URL=http://localhost:1843/

# CONTENTFUL CONFIG
CMS_SPACE_ID=#
CMS_ACCESS_TOKEN=#

CLOUDINARY_CLOUD_NAME=#
CLOUDINARY_API_KEY=#
CLOUDINARY_API_SECRET=#
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `yarn install`          | Installs dependencies                            |
| `yarn run dev`          | Starts local dev server at `localhost:3000`      |
| `yarn run build`        | Build your production site to `./dist/`          |
| `yarn run preview`      | Preview your build locally, before deploying     |
| `yarn run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro --help` | Get help using the Astro CLI                     |
