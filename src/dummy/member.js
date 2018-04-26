export const MEMBERS = [
  {
    username: 'admin',
    password: 'password',
    name: 'ADMIN'
  },
  {
    username: 'test',
    password: 'test',
    name: 'Tester'
  },
  {
    username: 'john',
    password: 'doe',
    name: 'John Doe'
  }
]
//
export function login(data, callbackOk, callbackFail) {
  let member = MEMBERS.find(x => x.username === data.username)
  if ((member !== undefined) && (member.password === data.password)) {
    callbackOk(data)
  } else {
    callbackFail(data)
  }
}
export function logout(data, callbackOk, callbackFail) {
  // eslint-disable-next-line
  if (true) {
    callbackOk(data)
  } else {
    callbackFail(data)
  }
}
export function getInfo(data, callbackOk, callbackFail) {
  let member = MEMBERS.find(x => x.username === data.username)
  if (member !== undefined) {
    delete member['password'];
    callbackOk(member)
  } else {
    callbackFail(data)
  }
}
