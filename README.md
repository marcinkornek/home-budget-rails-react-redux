## Home budget application using React + Redux + Rails

### Description
Application which uses React + Redux + Rails.

It uses [*npm*](https://www.npmjs.com/) package manager.

### Usage
Setting up Rails:
```
$ bundle install
$ cp /config/database.yml.sample /config /database.yml
$ rake db:setup
```
Setting up npm:
```
$ npm install
```

Start rails server:
```
$ rails s
```
Start npm:
* normal server:
```
$ npm start
```
* auto reloading server:
```
$ npm run start-dev
```
* auto hot-reloading server:
```
$ npm run start-hot-dev
```

### Heroku
[*home-budget-react.herokuapp.com*](https://home-budget-react.herokuapp.com)
