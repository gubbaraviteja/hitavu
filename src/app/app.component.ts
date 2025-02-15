import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {CustomSidenavComponent} from './components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent],
  template: `
<!--    <div class="root">-->
    <mat-toolbar class="mat-elevation-z3">
      <button mat-icon-button (click)="collapsed.set(!collapsed())">
        <mat-icon>menu</mat-icon>
      </button>
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
