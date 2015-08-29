# Farmony Markets
A web application to view local farmers markets and their vendors.

##General Approach & Hurdles
######Preparation:
- Created [Google Document](https://docs.google.com/document/d/1eVXVuK2S9cDVoq0kvjtOdalWFiBP5xUSwrreV8DvqoM/edit?usp=sharing) for documentation purposes.
- Created [Trello](https://trello.com/b/GV627Wb1) board for sharing information.
- Listed areas of expertise and areas of improvement for each team member.
- Listed schedules for each team member.

######Daily Scrum:
- Recorded meetings in Google Document.
- Questions, suggestions, and improvements.
- What did each person do the day and night before?
- What will each person work on today?

######Version Control:
- Comment often on new lines of code.
- Meet with group to resolve any merge conflicts.
- Pull request before pushing to master.
- When paired programming, include initials in commit message. 
  - For example, "Peer Initial/Initial".
  - Peer S/L means Silvia and Laura paired programmed with each other.
  - Peer O/J means Omari and Jared programed with each other.
  - And so on.

######Major Hurdles:
- Installing Sass into the application.
- Displaying Google Map pins from information from the database.
- Creating the search engine search through multiple attributes of a class.

######Technical Requirements
- API has RESTful routes as appropriate: Markets and vendors.
- API includes at least 2 models: Markets, vendors, and booths.
- Application provides a reasonable user experience.
- Models include at least one association.

######To Do:
- Complete styling of show pages.
- Integrate map into the market and vendor show pages.
- Add weather feature that displays the current local weather.
- Add Twitter authentication branch to master branch. Twitter authentication currently works, just need to add it.

##Installation Instructions
The instructions already assume that you have all the necessary installations ([Git](https://git-scm.com/), [Node](https://nodejs.org/), [NPM](https://www.npmjs.com/), [PostgreSQL](http://www.postgresql.org/), and [Express](http://expressjs.com/)). Once all prerequisites have been installed, follow these instructions to run the Express application. Change to the directory to place the repository. Do not place it into a repository with git initialized.

```console
$ cd to_chosen_directory
```

######To fork:
* In Github, select the 'Fork' button.
* In Github, a new forked repository will be added to your account.
* In Github, select and copy the HTTPS clone URL.
* In your CLI, use the git clone command to clone the repository.
* In your directory, the forked repository should be added.

######To clone:
* In Github, select and copy the HTTPS clone URL.
* In your CLI, use the git clone command to clone the repository.
* In your directory, the cloned repository should be added.

```console
$ git clone https://github.com/siltastic/farmony-markets.git
```

######To run the application:
- Have PostgreSQL running to connect to the server.
- Once repository is cloned, change directory to the repository.
- In your CLI, do a npm install to fetch NPM dependencies.
- In your CLI, create the database, migrate information, and seed data.
- In your CLI, run the express application.
- Open a browser with the following as the path: localhost:3000.

```console
$ npm install
$ dropdb farmony_db
$ createdb farmony_db
$ node db/migrate.js
$ node db/seed.js
$ nodemon index.js
```

##Authors
- Jared Arkin: https://github.com/arkinjb
- Silvia Brown: https://github.com/siltastic
- Omari Mayers-Walker: https://github.com/omarimayerswalker
- Laura Nawrocki: https://github.com/LauraWN

##Credits
- All iconograhy designed by Silvia Brown.
- All photographs belong to their respective owners.
- Google Maps API: https://developers.google.com/maps/?hl=en
- Weather Underground API: http://www.wunderground.com/weather/api
- Noto Sans Font by Google Fonts.
- Noto Serif Font by Google Fonts.