# API Pokedex nodejs
This repository demonstrates a service developed for
consumer the data of Pokemons from the official [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page)

#
#### GET
You can start here
>http://localhost:3000/pokedex/v1

You can access the link to demonstrate the all pokemons data
>http://localhost:3000/pokedex/v1/all

You can access the link to demonstrate the data by passing the pokemon ID filter
> id: 1

> http://localhost:3000/pokedex/v1/id/1

> id: 809

> http://localhost:3000/pokedex/v1/id/809

You can access the link to demonstrate the data by passing the name of the pokemon as a filter
> name: Charmander

> http://localhost:3000/pokedex/v1/name/Charmander"

You can access the link to demonstrate the data by passing the pokemon type as a filter
> type: Fire

> http://localhost:3000/pokedex/v1/type/Fire

> type: Grass

> http://localhost:3000/pokedex/v1/type/Grass

> type: Water

> http://localhost:3000/pokedex/v1/type/Water

#
## Docker
The application contains a docker file, if you want to go up in a container, use the command below for:

Create Image
> docker build -t api-pokedex-nodejs:latest .   

Create Container
>docker run --name api-pokedex-nodejs-container -p 3000:3000 api-pokedex-nodejs:latest  

#
## Docker Hub
The image is hosted on the docker hub, enter the command below to download and run the image in a container

>docker run --name api-pokedex-nodejs-container -p 3000:3000 gianeric08/api-pokedex-nodejs:latest


## Copyright Notice

Please note everything in repository are copyrighted by the Pokémon Company and its affiliates.
This repository is merely a compilation of data collected by the editors of [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page).
