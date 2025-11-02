import {Component, computed, signal} from '@angular/core';
import {RouterOutlet, RouterModule, Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {CustomSidenavComponent} from './components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent],
  template: `
<!--    <div class="root">-->
    <mat-toolbar class="mat-elevation-z3">
      <button mat-icon-button (click)="collapsed.set(!collapsed())">
        <mat-icon>menu</mat-icon>
      </button>
      
      <span class="toolbar-spacer"></span>
      
      <!-- Round logo in top right corner -->
      <div class="logo-container">
        <a [routerLink]="['/home']" class="logo-link">
          <div class="round-logo">
            <span class="logo-text">H</span>
          </div>
        </a>
      </div>
    </mat-toolbar>
    <mat-sidenav-container class="root">
      <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
        <app-custom-sidenav [collapsed]="collapsed()"/>
      </mat-sidenav>
      <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
        <router-outlet/>
      </mat-sidenav-content>
    </mat-sidenav-container>
<!--    </div>-->


  `,
  styles: [
    `
      .root {
        background-color: black;
        color: gray;
      }
      mat-toolbar {
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .toolbar-spacer {
        flex: 1;
      }

      .profile-pic-link {
        display: flex;
        align-items: center;
      }

      .profile-pic {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ffd700;
      }

      .logo-container {
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
      }

      .logo-link {
        text-decoration: none;
        color: inherit;
      }

      .round-logo {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: linear-gradient(135deg, #e68f38, #ffa500);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #1e3c72;
        box-shadow: 0 4px 15px rgba(230, 143, 56, 0.3);
        transition: all 0.3s ease;
      }

      .round-logo:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 6px 20px rgba(230, 143, 56, 0.4);
        background: linear-gradient(135deg, #ffa500, #e68f38);
      }

      .logo-text {
        font-size: 1.4rem;
        font-weight: bold;
        color: #ffffff;
        text-transform: uppercase;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }

      .content {
        padding: 24px;
      }

      mat-sidenav-container {
        height: calc(100vh - 64px)
      }

    `
  ],
})
export class AppComponent {
  title = 'hitavu';
  collapsed = signal(true);
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  constructor(private router: Router) {}

  isHomePage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/home' || currentUrl === '/' || currentUrl === '';
  }
}
