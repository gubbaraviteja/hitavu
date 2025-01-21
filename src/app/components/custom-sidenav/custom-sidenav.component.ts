import {Component, computed, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {sign} from 'node:crypto';
import {RouterModule} from '@angular/router';


export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
    <div class="sidenav-header">
      <img [width]="profilePicSize()" [height]="profilePicSize() " src="/profile-pic.jpg"/>
      <div class="header-text" [class.hide-header-text]="sidenavCollapsed()">
        <h2>Your wellwisher</h2>
        <p>Raviteja Gubba</p>
      </div>
    </div>
    <mat-nav-list>
<!--      @for (item of menuItems(); track item.label){-->
        <a mat-list-item *ngFor="let item of menuItems()" [routerLink]="item.route" routerLinkActive="selected-menu-item"
           #rla="routerLinkActive" [activated]="rla.isActive">
          <mat-icon [fontSet]="rla.isActive ? 'material-icons' : 'material-icons-outlined' " matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle *ngIf="!sidenavCollapsed()">{{ item.label }}</span>
        </a>
<!--      }-->

    </mat-nav-list>
  `,
  styles: [`

    :host * {
        transition: all 500ms ease-in-out;
    }

    .sidenav-header {
      padding-top: 24px;
      text-align: center;

      > img {
        border-radius: 100%;
        object-fit: cover;
        margin-bottom: 10px;
      }

      .header-text {
        height: 3rem;

        > h2 {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5rem;
        }

        > p {
          margin: 0;
          font-size: 0.8rem;
        }
      }

    }

    .hide-header-text {
      opacity: 0;
      height: 0px !important;
    }

    .menu-item {
      border-left: 5px solid;
      border-left-color:  rgba(0,0,0,0);
    }

    .selected-menu-item {
      border-left-color: var(--primary-color);
      background: rgba(0, 0, 0, 0.05);
    }
  `,
  ],
})
export class CustomSidenavComponent {

  sidenavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : '100');

  menuItems = signal<MenuItem[]>([
    {
      icon: 'temple_hindu',
      label: 'Spiritual',
      route: 'spiritual',
      subItems: [
        {
          icon: 'temple_hindu',
          label: 'Nitya Pooja',
          route: 'nityapooja'
        },
        {
          icon: 'temple_hindu',
          label: 'Bhagavadgita',
          route: 'bhagavadgita'
        },
        {
          icon: 'temple_hindu',
          label: 'Puranamulu',
          route: 'puranamulu'
        }
      ]
    },
    {
      icon: 'attach_money',
      label: 'Finance',
      route: 'finance'
    },
    {
      icon: 'health_and_safety',
      label: 'Health',
      route: 'health'
    },
    {
      icon: 'diversity_3',
      label: 'Social',
      route: 'social'
    },
    {
      icon: 'school',
      label: 'Upskill',
      route: 'upskill'
    }
  ]);

}
