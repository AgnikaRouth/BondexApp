import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiperRef', { read: ElementRef }) swiperRef:
    | ElementRef
    | undefined;
  constructor() {}

  ionViewDidEnter() {
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 2.5,
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
