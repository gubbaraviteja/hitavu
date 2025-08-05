import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social',
  imports: [MatTabsModule, CommonModule],
  template: `
    <div class="social-container">
      <h1>Social</h1>
      
      <mat-tab-group>
        <mat-tab label="Networking">
          <div class="tab-content">
            <h2>Professional Networking</h2>
            
            <h3>LinkedIn Connections</h3>
            <p>Manage your professional network and connections.</p>
            
            <h3>Industry Events</h3>
            <p>Track conferences, meetups, and industry events.</p>
            
            <h3>Mentorship</h3>
            <p>Find mentors and become a mentor to others.</p>
            
            <h3>Professional Groups</h3>
            <p>Join and participate in professional communities.</p>
            
            <h3>Career Development</h3>
            <p>Build relationships that advance your career.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Relationships">
          <div class="tab-content">
            <h2>Personal Relationships</h2>
            
            <h3>Family</h3>
            <p>Strengthen family bonds and maintain connections.</p>
            
            <h3>Friends</h3>
            <p>Nurture friendships and build meaningful relationships.</p>
            
            <h3>Romantic Relationships</h3>
            <p>Build and maintain healthy romantic partnerships.</p>
            
            <h3>Communication Skills</h3>
            <p>Improve communication and conflict resolution.</p>
            
            <h3>Social Skills</h3>
            <p>Develop better social interactions and empathy.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Community">
          <div class="tab-content">
            <h2>Community Engagement</h2>
            
            <h3>Volunteering</h3>
            <p>Give back to your community through volunteer work.</p>
            
            <h3>Local Groups</h3>
            <p>Join local clubs, organizations, and community groups.</p>
            
            <h3>Social Causes</h3>
            <p>Support causes you care about and make a difference.</p>
            
            <h3>Cultural Activities</h3>
            <p>Participate in cultural events and celebrations.</p>
            
            <h3>Neighborhood</h3>
            <p>Build relationships with neighbors and local community.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: `
    .social-container {
      padding: 20px;
      color: white;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #4ecdc4;
    }
    
    .tab-content {
      padding: 20px;
      line-height: 1.6;
    }
    
    h2 {
      color: #4ecdc4;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    
    h3 {
      color: #6ee7df;
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
      color: #4ecdc4 !important;
    }
    
    ::ng-deep .mat-mdc-tab-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  `
})
export class SocialComponent {

}
