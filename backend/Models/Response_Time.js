const Sequelize = require("sequelize");
const { sequelize } = require("./../DBConfigs/db");
const WebAddressStorage = require("./WebAddressStorage");

const Response_Time = sequelize.define(
  "Response_Time",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    response_code: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    response_time_ms: {
      type: Sequelize.INTEGER,
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

module.exports = Response_Time;
