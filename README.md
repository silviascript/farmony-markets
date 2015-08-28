# Farmony Markets
A web application to view local farmers markets and the vendors at each one.

##General Approach
* Preparation:
- Created Google Doc for documentation purposes
- Listed areas of expertise and areas of improvement for each team member
- Listed schedules for each team member
- Created trello board

* Daily scrum:
- Recorded meetings in Google doc
- What did each person do the day/night before?
- What will each person work on today?
- Questions, suggestions, improvements

* Version control:
- Pull request before pushing to master
- Meet with group to resolve any merge conflicts
- Comment often on new lines of code
- When peer programming include initials in commit message

##Major Hurdles
- Displaying Google map pins from information from the database
- Installing Sass into the app
- Making the search engine search through multiple attributes of a class

** To Do
- Complete styling of show pages
- Integrate map into the market and vendor show pages
- Add weather feature that displays the current local weather
- Add twitter authentication branch to master branch. Twitter auth currently works, just need to add.

##Installation Instructions
The instructions already assume that you have all the necessary installations (Git, Node, NPM, and Express). Once all prerequisites have been installed, follow these instructions to run the Express application. Change to the directory to place the repository. Do not place it into a repository with git initialized.

```console
$ cd to_chosen_directory
```
1. Clone the repository to your hard drive from github.
2. In terminal, run the following lines of code:
    $npm install
    $dropdb farmony_db
    $createdb farmony_db
    $node db/migrate.js
    $node db/seed.js
    $nodemon
  These lines of code will install the npm modules, drop the farmony db (in case you already are connected to the database), create the farmony database, migrate the table, and seed the information to the database.
3. Open a broswer with the following as the path: localhost:3000.

et Voila! Farmony Markets!


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
To be added.

```console
$ npm install
```

##Authors
- Jared Arkin: https://github.com/arkinjb
- Silvia Brown: https://github.com/siltastic
- Omari Mayers-Walker: https://github.com/omarimayerswalker
- Laura Nawrocki: https://github.com/LauraWN

##Credits
To be added.
