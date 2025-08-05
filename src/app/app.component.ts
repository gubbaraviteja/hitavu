import {Component, computed, signal} from '@angular/core';
import {RouterOutlet, RouterModule} from '@angular/router';
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
      <a [routerLink]="['/portfolio']" class="profile-pic-link">
        <img src="/profile-pic.jpg" alt="profilePic" class="profile-pic"/>
      </a>
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
}
