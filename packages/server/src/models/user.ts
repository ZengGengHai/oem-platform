//@ts-nocheck
import { Sequelize, DataTypes } from 'sequelize';
import {IUserModelStatic,IUserAttributes} from "../model_types/user"
export default function (sequelize: Sequelize) {
  const attributes:IUserAttributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "createdAt",
      autoIncrement: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "updatedAt",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    indexes: []
  };
  const UserModel:IUserModelStatic= sequelize.define("user_model", attributes, options);
  return UserModel;
}