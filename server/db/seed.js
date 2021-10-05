const dbConnection = require("./index");

const runSeed = async () => {
//The force true allows us to add new infromation to a table when we update it on the js file by overwriting the table we already have.
    await dbConnection.sync({ force: true });
    console.log("Seed is complete!");
    //We then use process.kill() to end the seeding once its done. Needs an argument or it will fail. i think number means status code of why its being killed. 
    process.kill(0);
}
//Dont forget to call the function
runSeed();