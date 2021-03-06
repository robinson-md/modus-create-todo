import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Chart } from 'chart.js';


import { MainPage } from '../../shared/main-page.interface';
import Pages from '../pages';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements MainPage {

  // Doughnut
  public lapses: string[] = ['Month', 'Week', 'Today'];
  public itemsByLapse: number[] = [350, 450, 100];
  public chartType: string = 'doughnut';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  goProfile(): void {
    this.navCtrl.setRoot(Pages.PROFILE_PAGE);
  }



}
