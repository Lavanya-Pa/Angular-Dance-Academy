import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Registration } from 'src/model/registration';
import { ChoreographerModel } from 'src/model/ChoreographerModel';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Booking } from 'src/model/Booking';

@Injectable({
  providedIn: 'root'
})
export class DanceService {
 
  deleteChoreos(id: any) {
    throw new Error("Method not implemented.");
  }
  deleteBooking(id: any) {
    throw new Error("Method not implemented.");
  }

  updateChoreo(choreoToBeEdit: ChoreographerModel) {
    return this.http.put(`${this.baseUrl}/updateChoreo/`,choreoToBeEdit);
  }
  
  choreoList: ChoreographerModel[] = [];
  bookingList: Booking[] = [];
  choreos: ChoreographerModel;
  registration  : Registration

  private baseUrl = 'http://localhost:8080';


  constructor(private router: Router, private http: HttpClient) { }

  insertChoreo(choreo: ChoreographerModel) {
    this.choreoList.push(choreo);
  }

  //return whole database
  getList(): ChoreographerModel[] {
    return this.choreoList;
  }

  //detete a entry
  deleteChoreo(isbn: any) {
   // return this.choreoList.splice(index, 1);
    return this.http.delete(`${this.baseUrl}` + `/deleteChoreo/${isbn}`);
  }

  deleteBookings(isbn: any) {
    // return this.choreoList.splice(index, 1);
     return this.http.delete(`${this.baseUrl}` + `/deleteBookings/${isbn}`);
   }

  // insertBookings(book: Booking) {
  //   this.bookingList.push(book);
  // }

  // //return whole database
  // getBookingList(): Booking[] {
  //   return this.bookingList;
  // }


  registerUser(registration: Registration) {
    return this.http.post(`${this.baseUrl}` + `/registerUser/`, registration);
  }

  validateLoginType(userName: string) {
    return this.http.get(`${this.baseUrl}` + `/validateLoginType/${userName}`);
  }

  validateUserLogin(userName: string,password: string) {
    return this.http.get(`${this.baseUrl}` + `/validateUserLogin/${userName}/${password}`);
  }

  getLocation(location: string):any {
    return this.http.get(`${this.baseUrl}` + `/getlocation/${location}`);
  }

  addChoreo(choreo: ChoreographerModel) {
    return this.http.post(`${this.baseUrl}` + `/addChoreo/`, choreo);
  }

  getAllChoreos() {
    return this.http.get(`${this.baseUrl}` + `/getAllChoreos`);
  }

  deleteByIsbn(isbn: number) {
    return this.http.delete(`${this.baseUrl}` + `/deleteChoreo/${isbn}`);
  }

  // updateChoreo(choreo: ChoreographerModel) {
  //   return this.http.put(`${this.baseUrl}` + `/updateChoreo/`, choreo);
  // }

  addBookings(booking: Booking) {
    return this.http.post(`${this.baseUrl}` + `/addBookings/`, booking);
  }

  getUserBookings(userName):any {
    return this.http.get(`${this.baseUrl}` + `/getUserBookings/${userName}`);
  }

  setSelectedChoreo(choreoToBeEdit: ChoreographerModel) {
    this.choreos=choreoToBeEdit;
   
  }
  getSelectedChoreo(){
    return this.choreos;
  }
}
