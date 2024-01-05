import Sequelize from "sequelize";

export default {
  name: "table_user",
  field: {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: Sequelize.STRING(64),
    password: Sequelize.STRING(64),
  },
  config: {
    timestamps: true,
    freezeTableName: true,
  },
};
