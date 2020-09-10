import User from '@models/User'

export default class UserController {
  test () {
    const user = new User()
    return user
  }
}
