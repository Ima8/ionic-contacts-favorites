import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs' ;
import { Storage } from '@ionic/storage'

export class Contact {
	prefix: string;
  firstname: string ;
  lastname: string ;
	email: string ;
	phone: string ;
}

export class ContactCall {
	firstname: string ;
  lastname: string ;
	phone: string ;
  time: string ;
}

/*
  Generated class for the ContactDateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactDataProvider {

  contactUrl : string = 'http://web.sit.kmutt.ac.th/sanit/int493/' ;

  contacts: Contact[] =[] ;
  favorites: ContactCall[] =[]  ;
  recentCalls: ContactCall[]=[] ;

  constructor(public http: Http,private storage:Storage) {
    console.log('Initiation Contact Data Provider');
    this.storage.ready().then(() => {
      this.storage.get('Favorites').then((data)=>{
        if(data){
          this.favorites = data;
        }
      })
      this.storage.get('RecentCalls').then((data)=>{
        if(data){
          this.recentCalls = data;
        }
      })
    });
  }

  getContactUrl(): string {
    return this.contactUrl ;
  }

  loadContacts(): Observable<Contact[]>{
	return this.http.get(this.contactUrl+'contacts.php')
  					.map( response => response.json().contacts ) ;
  }

  getRecentCalls(): ContactCall[] {
  	return this.recentCalls ;
  }

  addRecentCall(newCall: ContactCall){
  	//this.recentCalls.push(newCall) ;
    this.recentCalls.splice(0,0,newCall) ;
    this.storage.set("RecentCalls",this.recentCalls)
  }

  getFavorites(): ContactCall[]{
    return this.favorites ;
  }

  addFavorite(newFav: ContactCall){
    this.favorites.push(newFav) ;
    this.storage.set("Favorites",this.favorites)
  }

}
