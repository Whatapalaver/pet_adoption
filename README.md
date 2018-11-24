# Pet Adoption Project

This links to the US Petfinder API and allows you to search through the vast number of animals that are looking for a new home.

It's a React only app and utilises React Context (rather than Redux) for state hopping.

React was set-up from scratch and did not use the ubiquitous create-react-app. It has some really neat set-up features for Eslint and babelrc, thanks to Brian Holt and his pretty amazing Frontend Masters course. [Open source notes](https://btholt.github.io/complete-intro-to-react-v4/) found here.

# To Use

- Clone or fork this project git clone https://github.com/Whatapalaver/pet_adoption.git
- Change into the directory `cd pet_adoption`
- Install dependencies `npm install`
- You should also create a .gitignore file to prevent all the node_modules files being sent to github: `echo "node_modules" >> .gitignore`
- you also need to create a .env file at root with the API_KEY and API_SECRET that you will obtain from [petfinder.com](https://www.petfinder.com/developers/api-key) You will need to use a US zipcode to access this - ask Google for inspiration....
- Remember to stick .env into your .gitignore file
- to run the server `npm run dev`

# To Test

- Testing via Jest `npm run test` or `npm t`
- If you need to refresh the snapshots due to structural chnages `npm run test:update`
