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

  menus = [
    {
      menu_id: 1,
      menu_name: 'Ayam Goreng Sambal Ijo 1',
      menu_description: 'ayam goreng tepung dengan sambal ijo yang gurih',
      menu_image: '../assets/dummy.png',
    },
    {
      menu_id: 2,
      menu_name: 'Ayam Goreng Sambal Ijo 2',
      menu_description: 'ayam goreng tepung dengan sambal ijo yang gurih',
      menu_image: '../assets/dummy.png',
    },
    {
      menu_id: 3,
      menu_name: 'Ayam Goreng Sambal Ijo 3',
      menu_description: 'ayam goreng tepung dengan sambal ijo yang gurih',
      menu_image: '../assets/dummy.png',
    },
    {
      menu_id: 4,
      menu_name: 'Ayam Goreng Sambal Ijo 4',
      menu_description: 'ayam goreng tepung dengan sambal ijo yang gurih',
      menu_image: '../assets/dummy.png',
    },
    {
      menu_id: 5,
      menu_name: 'Ayam Goreng Sambal Ijo 5',
      menu_description: 'ayam goreng tepung dengan sambal ijo yang gurih',
      menu_image: '../assets/dummy.png',
    },
    {
      menu_id: 6,
      menu_name: 'Ayam Goreng Sambal Ijo 6',
      menu_description: 'ayam goreng tepung dengan sambal ijo yang gurih',
      menu_image: '../assets/dummy.png',
    },
  ];

  displays: Array<{
    menu_id: number;
    menu_name: string;
    menu_image: string;
    menu_description: string;
  }> = [];

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

    this.menus.forEach(menu => {
      if (this.displays.length < 4) {
        this.displays.push(menu);
      }
    });
  }

  onClickNextDisplay(): void {
    const lastIndex = this.displays.length - 1;
    const menuIndex = this.menus.findIndex(menu => menu.menu_id === this.displays[lastIndex].menu_id);

    const start = this.menus[menuIndex - 3 + 1] !== undefined ? menuIndex - 3 + 1 : 3;
    const end = this.menus[menuIndex + 1] !== undefined ? menuIndex + 1 : 0;

    if (end > start) {
      this.displays = [];
      for (let i = start; i <= end; i++) {
        this.displays.push(this.menus[i]);
      }
    } else {
      this.displays.splice(0, 1);
      this.displays.push(this.menus[end]);
    }
  }

  onClickPreviousDisplay(): void {
    const menuIndex = this.menus.findIndex(menu => menu.menu_id === this.displays[0].menu_id);
    const item = this.menus[menuIndex - 1] !== undefined ? this.menus[menuIndex - 1] : this.menus[this.menus.length - 1];
    this.displays.pop();
    this.displays.splice(0, 0, item);
  }

  onClickInstagram(): void {
    window.open(
      'https://www.instagram.com/catering_siangsore/',
      '_blank',
    );
  }

}
