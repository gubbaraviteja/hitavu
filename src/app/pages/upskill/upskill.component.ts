import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upskill',
  imports: [MatTabsModule, CommonModule],
  template: `
    <div class="upskill-container">
      <h1>Upskill</h1>
      
      <mat-tab-group>
        <mat-tab label="Technical Skills">
          <div class="tab-content">
            <h2>Technical Development</h2>
            
            <h3>Programming Languages</h3>
            <p>Learn and master new programming languages and frameworks.</p>
            
            <h3>Cloud Technologies</h3>
            <p>AWS, Azure, Google Cloud, and other cloud platforms.</p>
            
            <h3>DevOps & Tools</h3>
            <p>Docker, Kubernetes, CI/CD pipelines, and automation tools.</p>
            
            <h3>Data Science</h3>
            <p>Machine learning, data analysis, and statistical modeling.</p>
            
            <h3>Cybersecurity</h3>
            <p>Security best practices, ethical hacking, and threat analysis.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Soft Skills">
          <div class="tab-content">
            <h2>Professional Development</h2>
            
            <h3>Leadership</h3>
            <p>Develop leadership skills and team management abilities.</p>
            
            <h3>Communication</h3>
            <p>Improve written and verbal communication skills.</p>
            
            <h3>Problem Solving</h3>
            <p>Enhance analytical thinking and problem-solving abilities.</p>
            
            <h3>Time Management</h3>
            <p>Learn productivity techniques and time management strategies.</p>
            
            <h3>Negotiation</h3>
            <p>Develop negotiation and conflict resolution skills.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Certifications">
          <div class="tab-content">
            <h2>Professional Certifications</h2>
            
            <h3>Cloud Certifications</h3>
            <p>AWS, Azure, and Google Cloud professional certifications.</p>
            
            <h3>Technology Certifications</h3>
            <p>Microsoft, Cisco, CompTIA, and other tech certifications.</p>
            
            <h3>Project Management</h3>
            <p>PMP, PRINCE2, and other project management certifications.</p>
            
            <h3>Agile & Scrum</h3>
            <p>Scrum Master, Product Owner, and Agile methodology certifications.</p>
            
            <h3>Industry-Specific</h3>
            <p>Certifications relevant to your industry and career path.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: `
    .upskill-container {
      padding: 20px;
      color: white;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #f39c12;
    }
    
    .tab-content {
      padding: 20px;
      line-height: 1.6;
    }
    
    h2 {
      color: #f39c12;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    
    h3 {
      color: #f7dc6f;
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
      color: #f39c12 !important;
    }
    
    ::ng-deep .mat-mdc-tab-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  `
})
export class UpskillComponent {

}
