# Football Quiz

A football quiz app with TypeScript, React and custom Node backend.

## Client Technologies

-   React
-   TypeScript
-   Styled Components

## Backend Technologies

-   Node.js
-   Mongoose

## Scripts

| Description                  | Command          | Value                                                |
| ---------------------------- | ---------------- | ---------------------------------------------------- |
| Start server                 | `npm run start`  | `node server.js`                                     |
| Start server with Nodemon    | `npm run server` | `nodemon server.js`                                  |
| Start client                 | `npm run client` | `npm start --prefix client`                          |
| Start both client and server | `npm run dev`    | `concurrently \"npm run server\" \"npm run client\"` |

## API Routes

| Description           | Route                              |
| --------------------- | ---------------------------------- |
| Get all questions     | `GET /api/questions/`              |
| Get specific question | `GET /api/questions/:id/`          |
| Create a new question | `POST /api/questions/add/`         |
| Delete a question     | `DELETE /api/questions/delete/:id` |

## Trivia API

`https://opentdb.com/api.php?amount=10&type=multiple`

## Notes

-   Based on [this](https://www.youtube.com/watch?v=F2JCjVSZlG0) freeCodeCamp tutorial, but with custom backend

-   Double exclamation / bangs (!!) converts variable to boolean:

```js
<button disabled={!!userAnswer} />
```

-   Shortcut for getting JSON in await-style:

```js
const data = await (await fetch(endpoint)).json();
```

-   TypeScript optional chaining (?.):

```js
<ButtonWrapper correct={userAnswer?.correctAnswer === answer} />
```

This doesn't send an error if something is nullish, but just returns `undefined`.

-   VS Code extension for styled components: `vscode-styled-components`
