const Sequelize = require("sequelize");
const { sequelize } = require("./../DBConfigs/db");
const WebAddressStorage = require("./WebAddressStorage");

const Resource_Usage = sequelize.define(
  "Resource_Usage",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cpu_usage: {
      type: Sequelize.DECIMAL(5, 2),
      allowNull: false,
    },
    memory_usage: {
      type: Sequelize.DECIMAL(5, 2),
      allowNull: false,
    },
    disk_usage: {
      type: Sequelize.DECIMAL(5, 2),
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

module.exports = Resource_Usage;
