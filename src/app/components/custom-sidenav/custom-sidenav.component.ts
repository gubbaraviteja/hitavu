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
    <div class="sidenav-content">
      <mat-nav-list>
        <a mat-list-item *ngFor="let item of menuItems()" [routerLink]="item.route" routerLinkActive #rla="routerLinkActive" [activated]="rla.isActive">
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle *ngIf="!sidenavCollapsed()">{{ item.label }}</span>
        </a>
      </mat-nav-list>
      
      <!-- Profile picture at bottom left -->
      <div class="profile-section">
        <a [routerLink]="['/portfolio']" class="profile-link">
          <img src="/profile-pic.jpg" alt="profilePic" class="profile-pic"/>
          <span class="profile-text" *ngIf="!sidenavCollapsed()">About Me</span>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .sidenav-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    mat-nav-list {
      flex: 1;
    }

    .profile-section {
      padding: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .profile-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;
      gap: 12px;
    }

    .profile-pic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #ffd700;
    }

    .profile-text {
      color: #ffd700;
      font-weight: 500;
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
