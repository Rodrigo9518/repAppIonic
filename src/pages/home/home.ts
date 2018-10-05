import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageInteractionPage } from '../page-interaction/page-interaction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  launchPageInteraction(){
  	this.navCtrl.push(PageInteractionPage);
  }

}
