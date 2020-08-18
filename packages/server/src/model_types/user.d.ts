import { Model, BuildOptions } from 'sequelize';
export interface IUserAttributes {
  id: number,
  email?: string,
  password?: string,
  createdAt?: Date,
  updatedAt?: Date,
}
export interface IUserModel extends IUserAttributes, Model {}
export type IUserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUserModel;
};