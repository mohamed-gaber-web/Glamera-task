import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import SwiperCore, {
  SwiperOptions,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, Autoplay]);



@Component({
  selector: 'app-regestration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  passwordVisible = false;
  modalReference!: NgbModalRef;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		);
	}

  config: SwiperOptions = {
    slidesPerView: 1,
    autoplay: true,
    pagination: { clickable: true, type: 'bullets' },
    autoHeight: true,
    scrollbar: { draggable: true },
    lazy: true,
    speed: 1000,
    loop: false,
    navigation: false,
  };

  closeModal() {
    this.modalReference.close();
  }

}
