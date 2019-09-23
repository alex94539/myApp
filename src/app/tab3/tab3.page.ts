import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  scheduled = [];
  counter: number;
  constructor(private plt:Platform, private localNotifcation: LocalNotifications,
    private alertCtrl: AlertController) {
      this.counter = 0;
      this.plt.ready().then(() =>{
        this.localNotifcation.on('click').subscribe( res =>{
          let msg = res.data ? res.data.date : '';
          console.log('click: ', msg);
        });

        this.localNotifcation.on('trigger').subscribe( res =>{
          let msg = res.data ? res.data.date : '';
          console.log('trigger: ', msg);
        });
      })
    }
  
  newschedule(){
    this.localNotifcation.schedule({
      id: this.counter,
      
      title: "mumi",
      text: "久美子我老婆",
      data: { date: new Date() },
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND }
    });
    this.counter++;
  }

  getAll(){
    this.localNotifcation.getAll().then(res => {
      this.scheduled = res;
    })
  }

}
