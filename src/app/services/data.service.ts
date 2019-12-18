import { User } from '../models/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  users : User[] = [];

  constructor() { }


  public sayHello(){
    console.log('Hello from a service');
  }


  public saveUser(theNewUser){
    //get a user and add it to the array
    this.users.push(theNewUser);

  }

  public getAllUsers(){
    // return all users
    return this.users;
  }
}
