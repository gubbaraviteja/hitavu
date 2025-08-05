import {Routes} from '@angular/router';
import {SpiritualComponent} from './pages/spiritual/spiritual.component';
import {FinanceComponent} from './pages/finance/finance.component';
import {HealthComponent} from './pages/health/health.component';
import {SocialComponent} from './pages/social/social.component';
import {UpskillComponent} from './pages/upskill/upskill.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'portfolio'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'spiritual',
    component: SpiritualComponent
  },
  {
    path: 'spiritual/song/:songId',
    component: SpiritualComponent
  },
  {
    path: 'finance',
    component: FinanceComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'social',
    component: SocialComponent
  },
  {
    path: 'upskill',
    component: UpskillComponent
  }
];
