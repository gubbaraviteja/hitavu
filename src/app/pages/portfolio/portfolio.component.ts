import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {CommonModule, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
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
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatGridList,
    NgForOf,
    NgOptimizedImage,
    MatCardSubtitle,
    NgIf,
    MatToolbar, MatIconModule, MatListModule, CommonModule, MatGridTile
  ],
  template: `
    <mat-toolbar color="primary" class="title-container">
      <span class="title">Raviteja Gubba</span>
      <span class="subtitle">Payment Architect | TechLead | FullStack Developer</span>
    </mat-toolbar>

    <mat-grid-list [cols]="gridListCols" [rowHeight]="gridListRowHeight">
      <mat-grid-tile *ngFor="let project of projects">
        <mat-card class="featured-card">
          <img *ngIf="project.imageUrl" ngSrc="{{ project.imageUrl }}" alt="{{ project.title }}" class="card-image">
          <mat-card-content>
            <mat-card-title>{{ project.title }}</mat-card-title>
            <mat-card-subtitle>{{ project.role }}</mat-card-subtitle>
            <p>{{ project.description }}</p>
            <p class="project-header">Tech Stack:</p>
            <ul>
              <li *ngFor="let service of project.services" class="service">{{ service }}</li>
            </ul>
            <p class="project-header">Team size: {{project.teamSize}}</p>
            <p class="project-header">Technical details / Contribution:</p>
            <p *ngFor="let contribution of project.contributions">* {{ contribution }}</p>
          </mat-card-content>
          <!--          <mat-card-actions>-->
          <!--            <button mat-raised-button color="primary">View Project</button>-->
          <!--          </mat-card-actions>-->
        </mat-card>
      </mat-grid-tile>
    </mat-grid-list>

    <mat-toolbar color="primary" class="footer">
      <span class="logo">HITAVU</span>
<!--      <div class="menu">-->
<!--        <a href="#">Home</a>-->
<!--        <a href="#">Work</a>-->
<!--        <a href="#">Contact</a>-->
<!--      </div>-->
      <div class="social-icons">
        <a href="https://x.com/gubbaraviteja" target="_blank"><img src="https://cdn.prod.website-files.com/64fed5feaef6acf8a9f7b8ed/65012fc8380c6155c342447a_Icon_X.png" loading="lazy" width="24.5" alt="Icon"></a>
        <a href="https://www.linkedin.com/in/raviteja-gubba-4b1b7a70/" target="_blank"><img src="https://cdn.prod.website-files.com/64fed5feaef6acf8a9f7b8ed/65012fc7f255dded9fe508fe_Icon_LinkedIn.png" loading="lazy" width="24.5" alt="Icon"></a>
      </div>
    </mat-toolbar>
  `,
  styles: `

    .title-container {
      display: flex; /* Use flexbox for centering */
      flex-direction: column;
      justify-content: center; /* Center content horizontally */
      align-items: center; /* Center content vertically (optional) */
      height: 10vh; /* Make the container take full viewport height */
    }

    .title {
      font-size: 5rem;
      margin-bottom: 35px;
    }

    .subtitle {
      font-size: 1rem;
      color: #888; /* Optional: Lighter color for the subtitle */
    }

    .featured-card {
      background-color: rgba(197, 195, 195, 0.05); /* Dark background with slight transparency */
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      min-height: 600px;
      display: flex;
      flex-direction: column;
      /*width: 25%;*/
      backdrop-filter: blur(5px); /* Add a subtle blur effect */
      margin: 10px;
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    mat-card-content {
      flex-grow: 1; /* Allow the content to grow to fill the remaining space */
      padding: 16px; /* Add some padding for better readability */
    }

    .service {
      font-size: 0.8rem;
    }

    .project-header{
      font-style: italic;
    }

    .footer {
      /*bottom: 0;*/
      /*left: 0;*/
      width: 100%;
      color: white;
      padding: 10px 0;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.2rem;
      font-weight: bold;
      color: black;
      margin-left: 8px;
    }

    .social-icons {
      display: flex;
    }

    .social-icons a {
      margin: 5px;
    }

    @media (max-width: 600px) {
      .title-container {
        display: flex; /* Use flexbox for centering */
        flex-direction: column;
        justify-content: center; /* Center content horizontally */
        align-items: center; /* Center content vertically (optional) */
        height: 10vh; /* Make the container take full viewport height */
      }

      /* Adjust breakpoint as needed */
      .title {
        font-size: 2.5rem; /* Reduce font size for smaller screens */
        margin-bottom: 10px;
      }

      .subtitle {
        font-size: 0.8rem;
      }

      .featured-card {
        background-color: rgba(197, 195, 195, 0.05); /* Dark background with slight transparency */
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        overflow: scroll;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        /*width: 25%;*/
        backdrop-filter: blur(5px); /* Add a subtle blur effect */
        /*margin: 10px;*/
      }

      mat-card-content {
        flex-grow: 1; /* Allow the content to grow to fill the remaining space */
        padding: 10px; /* Add some padding for better readability */
      }

      .service {
        font-size: 0.9rem;
      }
    }
  `
})
export class PortfolioComponent {

  gridListCols: number = 3;
  gridListRowHeight: string = '550px';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe((result) => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.gridListCols = 1;
          this.gridListRowHeight = '800px';
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.gridListCols = 2;
          this.gridListRowHeight = '800px';
        } else {
          this.gridListCols = 3;
          this.gridListRowHeight = '650px';
        }
      }
    });
  }

  projects: Project[] = [
    {
      title: 'Payment Migration to AWS',
      description: 'It\'s an on-going project where we are migrating Payment Infrastructure to AWS for enhanced scalability, reliability and security while also optimizing Cost',
      services: ['AWS - Fargate, EC2, Aurora serverless, Lambda, SNS, SQS, Java21, DMS, DynamoDB, S3', 'Docker', 'MSSQL', 'Spring Boot', '.NET', 'Angular'],
      role: 'TechLead',
      teamSize: '4+',
      contributions: ['Created the migration strategy by assessing existing infrastructure and services running in the on-premise environment.', 'Successfully migrated databases with millions of records from on-premise to AWS with out impacting and zero downtime', 'Mentoring and guiding team members on best practises, helping in resolving technical challenges encountered during migration.']
    },
    {
      title: 'SPENN',
      description: 'Spenn is the new Nordic loyalty currency that you’ll earn when you book flights with Norwegian if you live in Norway, Sweden, Denmark or Finland.',
      services: ['Java21', 'AWS - Lambda, SNS, SQS, APIGateway, DynamoDB, Cloudwatch, S3', 'Angular', '.NET'],
      role: 'TechLead/Developer',
      teamSize: '3',
      contributions: ['Integrated with new loyalty provider to support SPENN as a payment option. This can be combined with other payment options like card, vipps, etc.', 'We had to implement a new workload to support this loyalty points which will take care of calculating the distribution between different payment options as this is going to be combined.', 'We also needed to implement additional rules to support restrictions like specific products can\'t be purchased with SPENN.']
    },
    {
      title: 'Migration from AngularJs to Angular',
      description: 'To enhance security and maintainability, we migrated our sensitive data handling paymentSite from deprecated AngularJS to modern Angular framework.',
      services: ['AngularJs', 'Angular', 'Sentry', '.NET', 'Java11', 'Spring Boot'],
      role: 'TechLead',
      teamSize: '2',
      contributions: ['Implemented performance monitoring for paymentSite migration by introducing routing rules in orchestration.', 'Leveraged Sentry for rapid issue resolution through detailed error tracking.', 'Enhanced data analysis capabilities by introducing metadata for each payment session, enabling business insights into site performance across various dimensions.']
    },
    {
      title: 'KIOSK payments',
      description: 'A simple idea from our wonderful colleague turned out to be bringing millions of extra revenue to the company. This project is to enable customer to buy ancillaries while he is doing self-checkin at kiosks in airports.',
      services: ['REST APIs', 'Kafka', 'MSSQL', 'Angular', '.NET', 'Java11', 'Spring Boot'],
      role: 'TechLead',
      teamSize: '2',
      contributions: ['We became payment provider and exposed our APIs to Kiosk systems supporting the sales of ancillaries on kiosks at airports.', 'Implemented support for QR code payments where customer can scan QR code on the KIOSK and complete payment on his mobile.']
    },
    {
      title: 'Integration with New Distribution Platform',
      description: 'It\'s an ongoing project and this is part of a wider initiative by company to enable new revenue streams.',
      services: ['AWS - Lambda, APIGateway, Aurora serverless, S3, REST APIs, SNS, SQS, Cloudwatch', 'Angular', '.NET', 'DynamoDB', 'Java17', 'Spring Boot', 'MSSQL'],
      role: 'TechLead',
      teamSize: '4',
      contributions: ['We became payment provider and exposed our APIs to an adapter which abstracts norwegian with NDP.', 'Supported company initiative by making the soft release in low volume markets to test the new site.', 'Supporting the release into big markets by A/B testing and collecting the data to compare the conversion between existing and new sites.']
    },
    {
      title: 'ClickToPay',
      description: 'One click payment solution from card schemes including Mastercard, Visa and AmEx.',
      services: ['Spring Boot', 'Java11', '.NET', 'AngularJs', 'REST APIs'],
      role: 'TechLead/Developer',
      teamSize: '4',
      contributions: ['We have integrated with JS SDK from Mastercard on our payment page as the UI components are from them so the clickToPay journey looks the same to the customer when he is doing purchase on different sites.', 'Resolved the challenge as the loading for SDK took more than 10s and customer is completing the payment by the time clickToPay is completely loaded.', 'Customized clickToPay flow for Norwegian Airlines to support surcharging certain card types. we have in-built payment orchestration which needs cardNumber more than the default bin length.']
    },
    {
      title: 'Reduce PCI footprint',
      description: 'This is part of a wider initiative by company to reduce costs associated with maintaining PCI environment.',
      services: ['Java11, Spring Boot', 'cloudflare worker', 'SFTP', 'AWS - lambda, SNS, SQS, Cloudwatch, S3', 'MSSQL', 'REST APIs', 'SOAP APIs'],
      role: 'TechLead/Developer',
      teamSize: '3',
      contributions: ['Migrated all historic data to the new token provider without impacting live traffic and zero downtime.', 'Leveraged various solutions from new tokenization provider and reduced the number of services in PCI environment from 7 to 1.']
    },
    {
      title: 'Payment360',
      description: 'A 360 view for payment analytics to support all data related needs for business team.',
      services: ['AWS - Quicksight, Glue, Kinesis Firehose, SNS, SQS, StepFunctions, Fargate, S3, Athena, Redshift serverless, Cloudwatch, AWSBatch', 'Kafka', 'MSSQL'],
      role: 'TechLead/Developer',
      teamSize: '7',
      contributions: ['Created ETL jobs to have data available for business to generate reports based on the needs from acquirers.', 'During critical times like COVID, this was life-saving tool for business to take faster decisions and secure cash-flow.', 'Built a foundational data warehouse to support all payment analytics needs, driving data-driven insights for business improvement.']
    },
    {
      title: 'Payment Operations',
      description: 'Day-to-day operations to maintain the payment stack, deploying and fire fighting as part of release management. ',
      role: 'TechLead/DevOpsEngineer',
      teamSize: '5',
      services: ['Jenkins', 'Bitbucket', 'Prometheus', 'Grafana', 'Shell', 'Perl', 'AWS - CodeBuild, CodePipeline, Cloudwatch, Cloudtrail, Cloudformation'],
      contributions: ['Streamlined release management and deployments by forming an operations team.', 'Implemented CI/CD pipelines to automate the release process in AWS.', 'Created monitoring dashboards to track the health of the payment stack and alert in real time in case of incidents.', 'Mentored and groomed the team to \n' +
      'develop strong DevOps skills and best practices']
    }

  ];

}
