import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-semua-menu',
  templateUrl: './semua-menu.component.html',
  styleUrls: ['./semua-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SemuaMenuComponent implements OnInit{

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

  categories = [
    {
      category_id: 1,
      category_name: 'Menu Daging',
      count: 14,
    },
    {
      category_id: 2,
      category_name: 'Menu Sayuran',
      count: 20,
    },
    {
      category_id: 3,
      category_name: 'Nasi Kotak',
      count: 24,
    },
    {
      category_id: 4,
      category_name: 'Tumpeng dan Hantaran',
      count: 15,
    },
    {
      category_id: 5,
      category_name: 'Menu Best Seller',
      count: 15,
    },
    {
      category_id: 6,
      category_name: 'Lainnya',
      count: 15,
    }
  ]

  menus = [
    {
      menu_name: 'Tumpeng 50 Orang',
      price: 1550000
    },
    {
      menu_name: 'Tumpeng 50 Orang',
      price: 1550000
    },
    {
      menu_name: 'Tumpeng 50 Orang',
      price: 1550000
    },
  ];

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
