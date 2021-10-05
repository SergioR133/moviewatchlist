const { application } = require("express");
const Sequelize = require("sequelize");

const dbConnection = new Sequelize(
    "postgres:localhost:5432/moviewatchlist"
)

// Testing connection down below:
// const test = async () => {
//     try {
//         await dbConnection.authenticate()
//     } catch (e) {
//         console.error(e)
//     }
// };
// test();

module.exports = dbConnection;

/*
    Movie model = model means table
        - title (not null)
        - imdbLink (null)
        - watched (not null, boolean, default false)
    Genre model
        - name (not null)
    
        Many-to-many movies and genre
        belongsToMany
*/

//Use define to establish the tabel in the database. the first argument is a string that will be the name of the table. the second is an object where we define the rows and the info for each column.
const Movie = dbConnection.define("movie", {
    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imdbLink: {
        type: Sequelize.STRING(1000),
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    watched: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
})

const Genre = dbConnection.define("genre", {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})

//Define associations here below tables
Movie.belongsToMany(Genre, {through: "movies_genres"})
Genre.belongsToMany(Movie, {through: "movies_genres"})