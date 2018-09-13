import moment from 'moment'

export class User {
  constructor (name) {
    this.name = name
    this.createdAt = moment()
  }
}

const ROOT_USER = new User('root'),
  NORMAL_USER = new User('user')

Object.defineProperty(User, 'NORMAL_USER', { get: () => NORMAL_USER })
Object.defineProperty(User, 'ROOT_USER', { get: () => ROOT_USER })
