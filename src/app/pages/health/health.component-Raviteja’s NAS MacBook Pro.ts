import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health',
  imports: [MatTabsModule, CommonModule],
  template: `
    <div class="health-container">
      <h1>Health</h1>
      
      <mat-tab-group>
        <mat-tab label="Fitness">
          <div class="tab-content">
            <h2>Physical Fitness</h2>
            
            <h3>Cardio Training</h3>
            <p>Running, cycling, swimming, and other cardiovascular exercises.</p>
            
            <h3>Strength Training</h3>
            <p>Weight lifting, bodyweight exercises, and resistance training.</p>
            
            <h3>Flexibility & Yoga</h3>
            <p>Stretching routines, yoga poses, and mobility exercises.</p>
            
            <h3>Sports & Activities</h3>
            <p>Team sports, individual sports, and recreational activities.</p>
            
            <h3>Workout Tracking</h3>
            <p>Monitor your fitness progress and set new goals.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Nutrition">
          <div class="tab-content">
            <h2>Healthy Eating</h2>
            
            <h3>Meal Planning</h3>
            <p>Plan balanced meals and track your daily nutrition.</p>
            
            <h3>Macro Tracking</h3>
            <p>Monitor protein, carbohydrates, and fat intake.</p>
            
            <h3>Supplements</h3>
            <p>Vitamins, minerals, and other dietary supplements.</p>
            
            <h3>Hydration</h3>
            <p>Track water intake and stay properly hydrated.</p>
            
            <h3>Dietary Restrictions</h3>
            <p>Manage allergies, intolerances, and special diets.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Mental Health">
          <div class="tab-content">
            <h2>Mental Wellness</h2>
            
            <h3>Meditation</h3>
            <p>Mindfulness practices and meditation techniques.</p>
            
            <h3>Stress Management</h3>
            <p>Techniques for managing stress and anxiety.</p>
            
            <h3>Sleep Quality</h3>
            <p>Track sleep patterns and improve sleep hygiene.</p>
            
            <h3>Emotional Wellbeing</h3>
            <p>Mood tracking and emotional health practices.</p>
            
            <h3>Work-Life Balance</h3>
            <p>Strategies for maintaining healthy boundaries.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: `
    .health-container {
      padding: 20px;
      color: white;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #ff6b6b;
    }
    
    .tab-content {
      padding: 20px;
      line-height: 1.6;
    }
    
    h2 {
      color: #ff6b6b;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    
    h3 {
      color: #ff8e8e;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    
    p {
      margin-bottom: 15px;
      text-align: justify;
    }
    
    mat-tab-group {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 20px;
    }
    
    ::ng-deep .mat-mdc-tab-group {
      color: white;
    }
    
    ::ng-deep .mat-mdc-tab-label {
      color: white !important;
    }
    
    ::ng-deep .mat-mdc-tab-label-active {
      color: #ff6b6b !important;
    }
    
    ::ng-deep .mat-mdc-tab-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  `
})
export class HealthComponent {

}
