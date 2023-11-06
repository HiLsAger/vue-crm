export default interface self_intefrace {
  token: string;
  created: string;
  life_time: number;
  user: User;
}

interface User {
  id: number;
  login: string;
  name: string;
}
