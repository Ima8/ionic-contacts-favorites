import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RecentsPage } from '../pages/recents/recents';
import { ContactsPage } from '../pages/contacts/contacts';
import { ContactDetailPage } from '../pages/contact-detail/contact-detail';
import { ContactEditPage } from '../pages/contact-edit/contact-edit';
import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactDataProvider } from '../providers/contact-data/contact-data';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { IonicStorageModule} from '@ionic/storage'
import { Camera } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation'
import { CallNumber } from '@ionic-native/call-number'
import { ActionSheet } from '@ionic-native/action-sheet';
@NgModule({
  declarations: [
    MyApp,
    RecentsPage,
    ContactsPage,
    ContactDetailPage,
    ContactEditPage,
    FavoritesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecentsPage,
    ContactsPage,
    ContactDetailPage,
    ContactEditPage,
    FavoritesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CallNumber,
    ActionSheet,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactDataProvider
  ]
})
export class AppModule { }
