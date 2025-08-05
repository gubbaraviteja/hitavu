import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, CommonModule],
  template: `
    <div fxLayout="column" fxLayoutGap="20px">
      <mat-toolbar color="primary" class="title-container">
        <span class="title">HITAVU</span>
        <span class="subtitle">Your Digital Wellbeing Companion</span>
      </mat-toolbar>
    </div>
  `,
  styles: `
    .title-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: black;
    }

    .title {
      font-size: 8rem;
      margin-bottom: 35px;
      color: #ffd700;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 8px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .subtitle {
      font-size: 1.5rem;
      color: #888;
      text-align: center;
      max-width: 600px;
      line-height: 1.4;
    }

    @media (max-width: 600px) {
      .title-container {
        height: 100vh;
      }

      .title {
        font-size: 4rem;
        margin-bottom: 20px;
        letter-spacing: 4px;
      }

      .subtitle {
        font-size: 1.2rem;
        padding: 0 20px;
      }
    }
  `
})
export class HomeComponent {
} 