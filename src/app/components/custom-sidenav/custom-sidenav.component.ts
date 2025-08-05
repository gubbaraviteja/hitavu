import {Component, computed, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';


export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
    <div class="sidenav-header" *ngIf="!sidenavCollapsed()">
      <div class="header-text">
        <h2>Your wellwisher</h2>
        <p>Raviteja Gubba</p>
      </div>
    </div>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems()" [routerLink]="item.route" routerLinkActive #rla="routerLinkActive" [activated]="rla.isActive">
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        <span matListItemTitle *ngIf="!sidenavCollapsed()">{{ item.label }}</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    .sidenav-header {
      padding-top: 24px;
      text-align: center;

      .header-text {
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
  `]
})
export class CustomSidenavComponent {

  sidenavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }



  menuItems = signal<MenuItem[]>([
    {
      icon: 'temple_hindu',
      label: 'Spiritual',
      route: 'spiritual'
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
