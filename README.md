# Search-per Hero

A simple search application that allows you to search for super heroes information and alter their stats. The data is selected from the [SuperHero API](https://www.superheroapi.com/).

## Preview

The prototype consists of ReactJS (as frontend) and NodeJS (as backend).

While the backend allows you to search, get and set heroes' stats, the frontend gives you a simple UI of a search bar above the listed search results along with a modal for user to edit the hero stats if he/she wishes to.

Overall, it is quite a simple build. Although it is certain that some of the UIs and functions could have been improved and enhanced, given that I need to finish it within 48 hours, this prototype has covered pretty much the functional requirements including:
- Allow user to search for superhero(es) by their name(s)
- See the superhero(es) along with their stats
- Edit and save the superhero(es) stats

## Build Instructions

To get this from the repository, simply get to the terminal and type in:

```
$ git clone https://github.com/nhatnguyen138/search-per-hero.git
```

Afterwards, make it to the folder named 'search-per-hero' and then the folder 'backend':

```
$ cd search-per-hero/backend
```

Install the backend's dependencies and deploy the backend the initiate the local API server which is at http://localhost:5000:

```
$ npm install
$ npm run server
```

Now, open another terminal and get to the folder 'frontend':

```
$ cd search-per-hero/frontend
```

Install the frontend's dependencies and run the code which it will locate at http://localhost:3000: 

```
$ npm install
$ npm start
```

Finally, open a browser and get to http://localhost:3000 to see what this whole shabang is all about.