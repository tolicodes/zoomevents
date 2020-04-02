import { BaseEntity as Base } from "typeorm";

export default class BaseEntity extends Base {
  constructor(fields) {
    super();

    Object.assign(this, fields);
  }
}
