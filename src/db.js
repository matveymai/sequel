const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('micro_base', 'postgres', '123', {
  dialect: 'postgres'
})

class Record extends Model {}
Record.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        text: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'record'
    });

sequelize.sync()

module.exports = {
    Record
}

