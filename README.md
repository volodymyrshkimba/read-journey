  <h1 style="display: flex; align-items: center; gap: 10px;">Read Journey   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/volodymyrshkimba/read-journey/blob/main/src/img/fav-light.svg?raw=true">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/volodymyrshkimba/read-journey/blob/main/src/img/fav-dark.svg?raw=true">
    <img alt="Read Journey Logo" width="32" height="32" src="https://github.com/volodymyrshkimba/read-journey/blob/main/src/img/fav-light.svg?raw=true">
  </picture>
  </h1>
  
---

## Project overview
Read Journey is a responsive React app for a book-reading tracker and personal library.  
It supports user signin/signup, browsing recommended books with server-side pagination, managing a personal library, and tracking reading progress (diary & statistics). Integrates with the provided backend API.

Figma design: https://www.figma.com/file/z3m0rdBcEfLTJUBDkAKhWQ/BOOKS-READING  
Backend API docs: https://readjourney.b.goit.study/api-docs/

---

## Key features
- Public pages: Register, Login  
- Private pages (auth required):
  - `/recommended` — recommended books + server-side pagination + book search + book modal
  - `/library` — user's library, filter by status, add & remove books
  - `/reading` — start/stop reading, diary, statistics
- Universal `Dashboard` wrapper with page-specific controls (Filters, AddBook, AddReading)
- Forms validated with `react-hook-form` + `Yup`; server errors shown as notifications
- Modal behavior: close on backdrop click, close-button, or Esc
- Images optimized (retina support), icons via sprite, favicons included
- Responsive breakpoints: mobile (320–), mobile adaptive (≥375px), tablet (≥768px), desktop (≥1440px)

---

## Tech stack
- React (Vite)
- Redux (Redux Toolkit) for state
- react-router for routing
- react-hook-form + Yup for form validation
- Axios for HTTP requests (interceptors for auth/refresh)
- CSS / (modules, vars)

---

## Project structure

src/
api/ # axios instance, auth helpers, interceptors
components/ # Components, Wrappers
fonts/ # Gilroy, woff, woff2
pages/ # pages: Recommended, Library, Reading, Auth
store/ # redux slices, store config
intex.css/ # global CSS, variables
img/ # images, sprite, favicons
utils/ # helpers
validation/ # validators
hooks/ # usePerPage, saveLastRoute

---

## Setup & run
```bash

# clone 
git clone https://github.com/volodymyrshkimba/read-journey.git

# install
npm install

# dev
npm run dev

# build
npm run build

# preview production build
npm run preview
```
