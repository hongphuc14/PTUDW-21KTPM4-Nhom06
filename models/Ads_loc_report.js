const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Ads_loc_report.init(sequelize, DataTypes);
}

class Ads_loc_report extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_report: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    officer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    office: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_ads_location: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Ads_location',
        key: 'id_ads_location'
      }
    },
    id_report_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Report_type',
        key: 'id_report_type'
      }
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photo1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photo2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    report_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    resolve: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ads_loc_report',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_report" },
        ]
      },
      {
        name: "id_ads_location",
        using: "BTREE",
        fields: [
          { name: "id_ads_location" },
        ]
      },
      {
        name: "id_report_type",
        using: "BTREE",
        fields: [
          { name: "id_report_type" },
        ]
      },
    ]
  });
  }
}
