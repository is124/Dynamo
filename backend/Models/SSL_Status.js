const Sequelize = require("sequelize");
const { sequelize } = require("./../DBConfigs/db");
const WebAddressStorage = require("./WebAddressStorage");

const SSL_Status = sequelize.define(
  "SSL_Status",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    valid_from: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    valid_until: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    last_checked_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    website_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: WebAddressStorage,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SSL_Status;
