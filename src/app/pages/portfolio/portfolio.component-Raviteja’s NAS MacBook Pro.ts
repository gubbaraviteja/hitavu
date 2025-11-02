import {Component} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

export type Project = {
  title: string;
  description: string;
  imageUrl?: string;
  role: string;
  budget?: string;
  teamSize: string;
  services: string[];
  contributions: string[];
}

@Component({
  selector: 'app-portfolio',
  imports: [
    NgForOf,
    NgIf,
    MatIconModule, 
    MatListModule, 
    CommonModule
  ],
  template: `
    <div class="portfolio-container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Raviteja Gubba</h1>
          <p class="hero-subtitle">Payment Architect | TechLead | FullStack Developer - based in Norway.</p>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="projects-section">
        <h2 class="section-title">Featured Projects</h2>
        
        <div class="projects-container">
          <!-- Project Grid -->
          <div class="projects-grid" *ngIf="!selectedProject">
            <div class="project-card" *ngFor="let project of projects" (click)="selectProject(project)">
              <div class="project-image-container">
                <img *ngIf="project.imageUrl" [src]="project.imageUrl" [alt]="project.title" class="project-image">
                <div class="project-overlay">
                  <mat-icon>visibility</mat-icon>
                </div>
              </div>
              <div class="project-info">
                <p class="project-description">{{ project.description }}</p>
              </div>
            </div>
          </div>

          <!-- Selected Project View -->
          <div class="selected-project" *ngIf="selectedProject">
            <div class="project-header">
              <button mat-icon-button (click)="backToProjectList()" class="back-button">
                <mat-icon>arrow_back</mat-icon>
              </button>
              <h2>{{ selectedProject.title }}</h2>
              <h3>{{ selectedProject.role }}</h3>
            </div>

            <!-- Project Image -->
            <div class="project-image-section" *ngIf="selectedProject.imageUrl">
              <img [src]="selectedProject.imageUrl" [alt]="selectedProject.title" class="project-image">
            </div>

            <!-- Project Details -->
            <div class="project-details">
              <div class="project-info">
                <h3>Description</h3>
                <p>{{ selectedProject.description }}</p>
                
                <h3>Tech Stack</h3>
                <div class="tech-stack">
                  <span *ngFor="let service of selectedProject.services" class="tech-tag">{{ service }}</span>
                </div>
                
                <h3>Team Size</h3>
                <p>{{ selectedProject.teamSize }}</p>
                
                <h3>Key Contributions</h3>
                <ul class="contributions-list">
                  <li *ngFor="let contribution of selectedProject.contributions">{{ contribution }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <span class="logo">HITAVU</span>
        <div class="social-icons">
          <a href="https://x.com/gubbaraviteja" target="_blank"><img
            src="https://cdn.prod.website-files.com/64fed5feaef6acf8a9f7b8ed/65012fc8380c6155c342447a_Icon_X.png"
            loading="lazy" width="24.5" alt="Icon"></a>
          <a href="https://www.linkedin.com/in/raviteja-gubba-4b1b7a70/" target="_blank"><img
            src="https://cdn.prod.website-files.com/64fed5feaef6acf8a9f7b8ed/65012fc7f255dded9fe508fe_Icon_LinkedIn.png"
            loading="lazy" width="24.5" alt="Icon"></a>
        </div>
      </div>
    </div>
  `,
  styles: `
    .portfolio-container {
      min-height: 100vh;
      background: #000000;
      color: #ffffff;
    }

    /* Hero Section */
    .hero-section {
      height: 60vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      text-align: center;
      background: #000000;
      position: relative;
      padding-top: 20vh;
    }

    .hero-content {
      max-width: 800px;
      padding: 0 20px;
    }

    .hero-title {
      font-size: 5rem;
      font-weight: bold;
      margin-bottom: 20px;
      color: #ffffff;
      font-family: sans-serif;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: #808080;
      margin-bottom: 20px;
      line-height: 1.4;
      font-family: sans-serif;
    }

    /* Projects Section */
    .projects-section {
      padding: 40px 20px 60px 20px;
      background:  #000000;
      margin-top: -80px;
      position: relative;
      z-index: 10;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 40px;
      color: #ffffff;
      font-weight: bold;
    }

    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Project Grid */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      padding: 20px 0;
    }

    .project-card {
      background: rgba(30, 60, 114, 0.2);
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid rgba(230, 143, 56, 0.1);
      backdrop-filter: blur(10px);
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: rgba(230, 143, 56, 0.3);
      background: rgba(30, 60, 114, 0.3);
    }

    .project-image-container {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .project-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image {
      transform: scale(1.05);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-overlay mat-icon {
      color: #e68f38;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
    }

    .project-info {
      padding: 20px;
    }

    .project-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: #e68f38;
      margin: 0 0 8px 0;
    }

    .project-role {
      font-size: 0.9rem;
      color: #ffa500;
      margin: 0 0 12px 0;
      font-weight: 500;
    }

    .project-description {
      color: #cccccc;
      font-size: 0.9rem;
      line-height: 1.4;
      margin: 0 0 15px 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .tech-tag {
      background: rgba(230, 143, 56, 0.2);
      color: #e68f38;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      border: 1px solid rgba(230, 143, 56, 0.3);
    }

    .tech-tag.more {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Selected Project View */
    .selected-project {
      max-width: 900px;
      margin: 0 auto;
      background: rgba(30, 60, 114, 0.3);
      border-radius: 16px;
      padding: 30px;
      border: 1px solid rgba(230, 143, 56, 0.2);
      backdrop-filter: blur(10px);
    }

    .project-header {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      gap: 15px;
    }

    .back-button {
      color: #e68f38;
      transition: all 0.3s ease;
    }

    .back-button:hover {
      color: #ffa500;
      transform: scale(1.1);
    }

    .project-header h2 {
      margin: 0;
      color: #e68f38;
      font-weight: 600;
      font-size: 2rem;
    }

    .project-header h3 {
      margin: 0;
      color: #ffa500;
      font-weight: 500;
    }

    .project-image-section {
      margin-bottom: 30px;
    }

    .project-image {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .project-details {
      color: #ffffff;
    }

    .project-info h3 {
      color: #e68f38;
      margin-top: 25px;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .project-info p {
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }

    .contributions-list {
      list-style: none;
      padding: 0;
    }

    .contributions-list li {
      padding: 8px 0;
      border-left: 3px solid #e68f38;
      padding-left: 15px;
      margin-bottom: 8px;
      background: rgba(230, 143, 56, 0.05);
      border-radius: 0 8px 8px 0;
    }

    /* Footer */
    .footer {
      width: 100%;
      color: white;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
    }

    .logo {
      font-size: 1.2rem;
      font-weight: bold;
      color: #e68f38;
    }

    .social-icons {
      display: flex;
      gap: 15px;
    }

    .social-icons a {
      transition: transform 0.3s ease;
    }

    .social-icons a:hover {
      transform: scale(1.1);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .selected-project {
        padding: 20px;
      }

      .project-header h2 {
        font-size: 1.5rem;
      }

      .tech-stack {
        gap: 6px;
      }

      .tech-tag {
        font-size: 0.8rem;
        padding: 4px 8px;
      }
    }
  `
})
export class PortfolioComponent {

  selectedProject: Project | null = null;

  constructor(private breakpointObserver: BreakpointObserver) {}

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  backToProjectList() {
    this.selectedProject = null;
  }

  shareProject() {
    if (this.selectedProject) {
      const shareUrl = `${window.location.origin}/portfolio`;
      
      if (navigator.share) {
        navigator.share({
          title: this.selectedProject.title,
          text: `Check out this project: ${this.selectedProject.description}`,
          url: shareUrl
        });
      } else {
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('Project URL copied to clipboard!');
        }).catch(() => {
          prompt('Share this URL:', shareUrl);
        });
      }
    }
  }



  projects: Project[] = [
    {
      title: 'Payment Migration to AWS',
      description: 'It\'s an on-going project where we are migrating Payment Infrastructure to AWS for enhanced scalability, reliability and security while also optimizing Cost',
      services: ['AWS - Fargate, EC2, Aurora serverless, Lambda, SNS, SQS, Java21, DMS, DynamoDB, S3', 'Docker', 'MSSQL', 'Spring Boot', '.NET', 'Angular'],
      role: 'TechLead',
      teamSize: '4+',
      contributions: ['Created the migration strategy by assessing existing infrastructure and services running in the on-premise environment.', 'Successfully migrated databases with millions of records from on-premise to AWS with out impacting and zero downtime', 'Mentoring and guiding team members on best practises, helping in resolving technical challenges encountered during migration.'],
      imageUrl: 'portfolio/payment-migration-to-aws.jpg'

    },
    {
      title: 'SPENN',
      description: 'Spenn is the new Nordic loyalty currency that you’ll earn when you book flights with Norwegian if you live in Norway, Sweden, Denmark or Finland.',
      services: ['Java21', 'AWS - Lambda, SNS, SQS, APIGateway, DynamoDB, Cloudwatch, S3', 'Angular', '.NET'],
      role: 'TechLead/Developer',
      teamSize: '3',
      contributions: ['Integrated with new loyalty provider to support SPENN as a payment option. This can be combined with other payment options like card, vipps, etc.', 'We had to implement a new workload to support this loyalty points which will take care of calculating the distribution between different payment options as this is going to be combined.', 'We also needed to implement additional rules to support restrictions like specific products can\'t be purchased with SPENN.'],
      imageUrl: 'portfolio/spenn-as-new-payment-option.jpg'
    },
    {
      title: 'Migration from AngularJs to Angular',
      description: 'To enhance security and maintainability, we migrated our sensitive data handling paymentSite from deprecated AngularJS to modern Angular framework.',
      services: ['AngularJs', 'Angular', 'Sentry', '.NET', 'Java11', 'Spring Boot'],
      role: 'TechLead',
      teamSize: '2',
      contributions: ['Implemented performance monitoring for paymentSite migration by introducing routing rules in orchestration.', 'Leveraged Sentry for rapid issue resolution through detailed error tracking.', 'Enhanced data analysis capabilities by introducing metadata for each payment session, enabling business insights into site performance across various dimensions.'],
      imageUrl: 'portfolio/migrate-angularjs-to-angular.png'
    },
    {
      title: 'KIOSK payments',
      description: 'A simple idea from our wonderful colleague turned out to be bringing millions of extra revenue to the company. This project is to enable customer to buy ancillaries while he is doing self-checkin at kiosks in airports.',
      services: ['REST APIs', 'Kafka', 'MSSQL', 'Angular', '.NET', 'Java11', 'Spring Boot'],
      role: 'TechLead',
      teamSize: '2',
      contributions: ['We became payment provider and exposed our APIs to Kiosk systems supporting the sales of ancillaries on kiosks at airports.', 'Implemented support for QR code payments where customer can scan QR code on the KIOSK and complete payment on his mobile.'],
      imageUrl: 'portfolio/enable-payments-on-kiosks.jpg'
    },
    {
      title: 'Integration with New Distribution Platform',
      description: 'It\'s an ongoing project and this is part of a wider initiative by company to enable new revenue streams.',
      services: ['AWS - Lambda, APIGateway, Aurora serverless, S3, REST APIs, SNS, SQS, Cloudwatch', 'Angular', '.NET', 'DynamoDB', 'Java17', 'Spring Boot', 'MSSQL'],
      role: 'TechLead',
      teamSize: '4',
      contributions: ['We became payment provider and exposed our APIs to an adapter which abstracts norwegian with NDP.', 'Supported company initiative by making the soft release in low volume markets to test the new site.', 'Supporting the release into big markets by A/B testing and collecting the data to compare the conversion between existing and new sites.'],
      imageUrl: "portfolio/integration-with-ndp.jpg"
    },
    {
      title: 'ClickToPay',
      description: 'One click payment solution from card schemes including Mastercard, Visa and AmEx.',
      services: ['Spring Boot', 'Java11', '.NET', 'AngularJs', 'REST APIs'],
      role: 'TechLead/Developer',
      teamSize: '4',
      contributions: ['We have integrated with JS SDK from Mastercard on our payment page as the UI components are from them so the clickToPay journey looks the same to the customer when he is doing purchase on different sites.', 'Resolved the challenge as the loading for SDK took more than 10s and customer is completing the payment by the time clickToPay is completely loaded.', 'Customized clickToPay flow for Norwegian Airlines to support surcharging certain card types. we have in-built payment orchestration which needs cardNumber more than the default bin length.'],
      imageUrl: "portfolio/click-to-pay.jpg"
    },
    {
      title: 'Reduce PCI footprint',
      description: 'This is part of a wider initiative by company to reduce costs associated with maintaining PCI environment.',
      services: ['Java11, Spring Boot', 'cloudflare worker', 'SFTP', 'AWS - lambda, SNS, SQS, Cloudwatch, S3', 'MSSQL', 'REST APIs', 'SOAP APIs'],
      role: 'TechLead/Developer',
      teamSize: '3',
      contributions: ['Migrated all historic data to the new token provider without impacting live traffic and zero downtime.', 'Leveraged various solutions from new tokenization provider and reduced the number of services in PCI environment from 7 to 1.'],
      imageUrl: "portfolio/pci.jpg"
    },
    {
      title: 'Payment360',
      description: 'A 360 view for payment analytics to support all data related needs for business team.',
      services: ['AWS - Quicksight, Glue, Kinesis Firehose, SNS, SQS, StepFunctions, Fargate, S3, Athena, Redshift serverless, Cloudwatch, AWSBatch', 'Kafka', 'MSSQL'],
      role: 'TechLead/Developer',
      teamSize: '7',
      contributions: ['Created ETL jobs to have data available for business to generate reports based on the needs from acquirers.', 'During critical times like COVID, this was life-saving tool for business to take faster decisions and secure cash-flow.', 'Built a foundational data warehouse to support all payment analytics needs, driving data-driven insights for business improvement.'],
      imageUrl: "portfolio/payment-360.jpg"
    },
    {
      title: 'Payment Operations',
      description: 'Day-to-day operations to maintain the payment stack, deploying and fire fighting as part of release management. ',
      role: 'TechLead/DevOpsEngineer',
      teamSize: '5',
      services: ['Jenkins', 'Bitbucket', 'Prometheus', 'Grafana', 'Shell', 'Perl', 'AWS - CodeBuild, CodePipeline, Cloudwatch, Cloudtrail, Cloudformation'],
      contributions: ['Streamlined release management and deployments by forming an operations team.', 'Implemented CI/CD pipelines to automate the release process in AWS.', 'Created monitoring dashboards to track the health of the payment stack and alert in real time in case of incidents.', 'Mentored and groomed the team to \n' +
      'develop strong DevOps skills and best practices'],
      imageUrl: "portfolio/payment-operations.jpg"
    }

  ];

}
