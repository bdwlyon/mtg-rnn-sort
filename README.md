# mtg-rnn-sort
This is a simple web app that uses spring boot to read Magic: The Gathering card data (in mtgjson format) from a MongoDB instance and then render the cards in angular 4.

Currently, users can:
* log in
* view a random stream of unsorted cards
  * assign the card a validity rating of [yes, no, maybe, almost]
  * mark the card with a variety of tags providing additional description
* search the database for cards via card name
  * see whether a card returned from search has been sorted or not
  
Eventually, the plan is to allow users to:
* search and filter multiple cards by [color, card type, cmc, validity, tags, etc.]
* mark sorted cards as suitable for the cube
* view cards that have been marked for the cube and filter them by various criteria

## Setup
Requirements:
 * MongoDB
 * node/npm
 * angular cli
 * Java
 * gradle
 
Once you have an instance of Mongo running with `mongod`, (in a separate shell/command prompt) import the sample card data with
```
mongoimport --db test --collection card --drop --file ~/mtg-rnn-sort/sample_data/mtg_cards.json
```

Then, import the test user
```
mongoimport --db test --collection user --drop --file ~/mtg-rnn-sort/sample_data/user.json
```
to log in with this sample user, use the credentials:

>**username**: dev
>
>**password**: test

------

To start the spring server, from the root of the repo run
```
./gradlew build && java -jar build/libs/mtg-rnn-sort-0.0.1-SNAPSHOT.jar
```
(NOTE: for Windows systems, enable the Windows subsystem for Linux, and run the above command within Powershell)

------
 
To start the angular server, first install the angular cli
```
npm install -g @angular/cli
```
then navigate to the angular-ui directory and download the necessary node modules
```
npm update
```
finally, start the server
```
ng serve --proxy-config proxy.conf.json
```

------

Go to http://localhost:4200 in your favorite web browser to view the server

Note that you can also build everything into a .war file for easy deployment with `gradle clean build run` (on Windows: `./gradlew clean build run`).
Spring will then serve all of the angular files from port 8080. This is however not recommended for development work, 
as it takes a considerable amount of time to stop/rebuild/start the server when testing changes.
