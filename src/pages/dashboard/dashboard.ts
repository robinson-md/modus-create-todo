import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { DashboardState } from '../../shared/store/dashboard/dashboard.state';
import { MainPage } from '../../shared/main-page';



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
export class DashboardPage extends MainPage{

  // Doughnut
  public lapses: string[] = ['Month', 'Week', 'Today'];
  public itemsByLapse: number[] = [350, 450, 100];
  public chartType: string = 'doughnut';
  @Select(DashboardState.summary) summary$: Observable<any>;

  constructor(public navCtrl: NavController, public store: Store) {
    super(navCtrl, store);
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
