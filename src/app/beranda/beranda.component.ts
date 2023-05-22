import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BerandaComponent implements OnInit{

  banners = [
    {
      active: true,
      link: '../assets/banner.jpeg',
    },
    {
      active: false,
      link: '../assets/banner.jpeg',
    }
  ]

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    setInterval(() => {
      const index = this.banners.findIndex(i => i.active);
      this.banners[index].active = false;
      if (this.banners[index + 1] !== undefined) {
        this.banners[index + 1].active = true;
      } else {
        this.banners[0].active = true;
      }
      this.ref.detectChanges();
    }, 3000);
  }

}
