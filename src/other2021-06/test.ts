interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

function getAdminUser(): User {
  return new UserAccount("Dan", 0);
}

function f() {
  console.log(getAdminUser().name);
}

export default f;
