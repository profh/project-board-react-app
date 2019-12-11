67-272 Project Board App (w/ React)
===
This is a simple demo in two parts.  The first part is a very basic API written in Rails and the code is in the `project-board-api` directory.  Do the usual `bundle install`, then `rails db:migrate` to set the project up.  When running it, do so on port 3001 (the front-end expects that) by starting the server with `rails server -p 3001`.  Once you have some records in the database, you can see the main GET endpoint at: `http://localhost:3001/cards`.

The second part is the crux of the demo -- a basic React app that adds cards to your simple kanban board and allows you to add tasks to each card.  To get this going, first run `npm install` followed by `npm start`.  Typically the react app would run on port 3000, but for various reasons, I wanted it to run on port 3003, so there is a .env file in the project with that information; if you want a different port, just edit that file.  With both the API running and the app started, you can add some cards and then for each card add tasks to it.  If a task is completed, just click on it and a check mark will appear (click again to toggle that mark off).

  

