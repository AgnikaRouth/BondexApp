import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  // ionViewDidEnter() {
  //   // Initialize Swiper when the view has entered
  //   var mySwiper = new Swiper('.swiper-container', {
  //     direction: 'horizontal',
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //   });
  // }

  ionViewDidEnter() {
    // Initialize Swiper when the view has entered
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      // centeredSlides: true,
      loop: true,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });
  }
}
