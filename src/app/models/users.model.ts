export interface user {
  id: string,
  email:  string,
  password: string,
  name: string
}

export interface createUserDTO extends Omit<user, 'id'>{}
