import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { VaccinationService } from 'src/app/services/vaccination.service';
import { VacchildComponent } from '../vacchild/vacchild.component';

@Component({
  selector: 'app-vaccination-form',
  templateUrl: './vaccination-form.component.html',
  styleUrls: ['./vaccination-form.component.scss']
})
export class VaccinationFormComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

  states: any;
  stateSubsciption: Subscription;
  districtSubsciption: Subscription;
  selectedState: any;
  districts: any;
  selectedDistrict: any;
  showForm = false;
  @ViewChild('vacChild')vacChild: VacchildComponent;

  constructor(private vaccinationService: VaccinationService) { 
    this.stateSubsciption = this.vaccinationService.states.subscribe((data) => {
      this.states = data;
    });
    
  }

  ngOnInit(): void {
    console.log("In On Init Method");
    this.districtSubsciption = this.vaccinationService.districts.subscribe((data) => {
      console.log("Subscribed from On Init");
      this.districts = data;
    });
  }

  ngAfterViewInit() {
    console.log("I am Inside View Init");
    this.showForm = true;
  }

  ngAfterViewChecked() {
    console.log("I am being called from view checked");
  }

  ngOnDestroy() {

    console.log("Component has been destroyed");
  }

  submitState(stateId) {
    this.vaccinationService.getDistrict(stateId.target.value);

  }

  destroyComponent(ev) {
    this.vacChild.updateHeaderText();
  }


}
