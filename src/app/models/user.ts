export class User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;

    constructor(
        id: number,
        firstName: string,
      lastName: string,
      password:string,
      email:string
    ){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName   
        this.password = password
        this.email = email
}
}
