import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VaccinationService } from './services/vaccination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vaccination Drive In India';
  someDataSubs: Subscription;
  showVac = true;

  constructor(private vaccinationService: VaccinationService, private router: Router) {
    this.vaccinationService.getStates();
  }

  ngOnInit() {
    this.someDataSubs = this.vaccinationService.someDataToTrigger.subscribe((data) => {
      if (data) {
        this.showVac = false;
      }
    });
  }
}
