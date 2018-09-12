// var testing = require('../config/passport/passport');
// console.log(testing.req);
module.exports = function(sequelize, Sequelize) {
    var Character = sequelize.define('char', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        // characterId: {
        //     defaultValue: req.user.id
        // },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        char_name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        hp: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        attack: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        defence: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    // Character.associate = function(models){

    //     Character.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    // }

    return Character;

}

// console.log(testing.dashboard());