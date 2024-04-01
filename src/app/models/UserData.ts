interface UserData {
  gender: string
  age: number
  height: number
  weight: number
  pal: number
  targetWeight: number
  startDate: string
}

class UserData {
  constructor(data: Partial<UserData>) {
    Object.assign(this, data);
  }
}

export default UserData