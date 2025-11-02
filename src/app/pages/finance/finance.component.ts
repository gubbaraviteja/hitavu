import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance',
  imports: [MatTabsModule, CommonModule],
  template: `
    <div class="finance-container">
      <h1>Finance</h1>
      
      <mat-tab-group>
        <mat-tab label="Investments">
          <div class="tab-content">
            <h2>Investment Portfolio</h2>
            
            <h3>Stock Market</h3>
            <p>Track your stock investments and market performance.</p>
            
            <h3>Mutual Funds</h3>
            <p>Monitor your mutual fund investments and returns.</p>
            
            <h3>Real Estate</h3>
            <p>Real estate investment tracking and property management.</p>
            
            <h3>Cryptocurrency</h3>
            <p>Digital currency investments and blockchain assets.</p>
            
            <h3>Bonds & Fixed Income</h3>
            <p>Government bonds, corporate bonds, and fixed income securities.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Budgeting">
          <div class="tab-content">
            <h2>Budget Management</h2>
            
            <h3>Monthly Budget</h3>
            <p>Plan and track your monthly income and expenses.</p>
            
            <h3>Expense Categories</h3>
            <p>Organize expenses by categories: housing, food, transportation, etc.</p>
            
            <h3>Savings Goals</h3>
            <p>Set and track progress towards your savings goals.</p>
            
            <h3>Emergency Fund</h3>
            <p>Build and maintain an emergency fund for financial security.</p>
            
            <h3>Debt Management</h3>
            <p>Track and plan debt repayment strategies.</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Tax Planning">
          <div class="tab-content">
            <h2>Tax Strategy</h2>
            
            <h3>Tax Deductions</h3>
            <p>Identify and track eligible tax deductions.</p>
            
            <h3>Tax-Advantaged Accounts</h3>
            <p>401(k), IRA, HSA, and other tax-advantaged investment accounts.</p>
            
            <h3>Tax Loss Harvesting</h3>
            <p>Strategies for offsetting capital gains with losses.</p>
            
            <h3>Estate Planning</h3>
            <p>Inheritance tax planning and wealth transfer strategies.</p>
            
            <h3>International Tax</h3>
            <p>Tax considerations for international investments and income.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: `
    .finance-container {
      padding: 20px;
      color: white;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #00ff88;
    }
    
    .tab-content {
      padding: 20px;
      line-height: 1.6;
    }
    
    h2 {
      color: #00ff88;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    
    h3 {
      color: #00cc66;
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
      color: rgba(255, 255, 255, 0.85) !important;
      opacity: 1 !important;
    }
    
    ::ng-deep .mat-mdc-tab-label .mdc-tab__text-label {
      color: rgba(255, 255, 255, 0.85) !important;
    }
    
    ::ng-deep .mat-mdc-tab-label:hover {
      color: rgba(255, 255, 255, 1) !important;
    }
    
    ::ng-deep .mat-mdc-tab-label:hover .mdc-tab__text-label {
      color: rgba(255, 255, 255, 1) !important;
    }
    
    ::ng-deep .mat-mdc-tab-label-active {
      color: #00ff88 !important;
      font-weight: 500 !important;
    }
    
    ::ng-deep .mat-mdc-tab-label-active .mdc-tab__text-label {
      color: #00ff88 !important;
      font-weight: 500 !important;
    }
    
    ::ng-deep .mat-mdc-tab-header {
      border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    }
    
    ::ng-deep .mdc-tab__text-label,
    ::ng-deep .mdc-tab__content .mdc-tab__text-label,
    ::ng-deep .mat-mdc-tab-label-container .mdc-tab__text-label {
      color: rgba(255, 255, 255, 0.85) !important;
    }
    
    ::ng-deep .mdc-tab--active .mdc-tab__text-label,
    ::ng-deep .mdc-tab--active .mdc-tab__content .mdc-tab__text-label {
      color: #00ff88 !important;
      font-weight: 500 !important;
    }
    
    ::ng-deep .mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    ::ng-deep .mdc-tab-indicator__content--underline {
      border-color: #00ff88 !important;
      border-width: 3px !important;
    }
    
    ::ng-deep .mat-mdc-tab.mdc-tab--active .mdc-tab-indicator__content--underline {
      border-color: #00ff88 !important;
    }
  `
})
export class FinanceComponent {

}
