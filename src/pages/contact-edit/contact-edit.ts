import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController } from 'ionic-angular';

import { ContactDataProvider, Contact } from '../../providers/contact-data/contact-data' ;

import { FormBuilder, FormGroup, Validators } from  '@angular/forms' ;

/**
 * Generated class for the ContactEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {

  contactDetail: Contact ;
  picture: string ;

  contactForm : FormGroup ;

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams, 
  	          public contactData: ContactDataProvider,
  	          public formBuilder: FormBuilder,
  	          public alertCtrl: AlertController) {
  	this.contactDetail = this.navParams.get('contact') ;
  	this.picture=this.contactData.getContactUrl()+'contacts/img/'+this.contactDetail.firstname.toLowerCase()+'.jpeg' ;
  	this.contactForm = this.formBuilder.group({
  		prefix: [this.contactDetail.prefix],
  		firstname: [this.contactDetail.firstname,Validators.required],
  		lastname: [this.contactDetail.lastname,Validators.required],
  		email: [this.contactDetail.email,Validators.compose([Validators.required,Validators.email])],
  		phone: [this.contactDetail.phone,Validators.compose([Validators.required,Validators.pattern('^[0-9-]*')])]
  	})
  }

  validate(): boolean {

  	let errorMsg : string ;

  	if (this.contactForm.valid){
  		return true ;
  	}

  	let control = this.contactForm.controls['firstname'] ;
  	if (control.invalid){
  		if (control.errors['required']){
  			errorMsg = 'Please provide a firstname.' ;
  		} 
  	}

  	let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: errorMsg || 'Empty error message!',
      buttons: ['OK']
    });
    // show alert with error message
    alert.present();

    return false ;  	
  }

  saveContact() {
  	if(this.validate()){
  		this.contactDetail = this.contactForm.value ;
  		this.navCtrl.pop() ;
	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactEditPage');
  }

}
