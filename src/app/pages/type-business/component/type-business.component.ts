import { Component } from '@angular/core';

@Component({
  selector: 'app-type-business',
  templateUrl: './type-business.component.html',
  styleUrls: ['./type-business.component.scss']
})
export class TypeBusinessComponent {

  types = [
    {
      id: 1,
      name:'Salon',
      img: '../../../assets/images/Group 45.svg'
    },
    {
      id: 2,
      name:'Gym',
      img: '../../../assets/images/Group 46.svg'
    },
    {
      id: 3,
      name:'Spa',
      img: '../../../assets/images/Group 47.svg'
    },
    {
      id: 4,
      name:'Clinic',
      img: '../../../assets/images/Group 48.svg'
    }
  ];

  toggleCheck: boolean = false;

  toggleCheckItem() {
    this.toggleCheck = !this.toggleCheck;
  }

}
