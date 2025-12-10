import { Component, inject } from '@angular/core';
import { AppRouting } from '../app-routing';
import { AndActionDataService } from '../core/and-action-data.service';
import { Router, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommitsDashboardConfig, DEFAULT_UPDATE_INTERVAL_IN_SECONDS } from '../core/commits-dashboard-config';

@Component({
  imports: [FormsModule, MatButtonModule, MatInputModule, RouterModule],
  selector: 'ana-actions-dashboard-config',
  templateUrl: './actions-dashboard-config.component.html',
  styleUrl: './actions-dashboard-config.component.scss',
})
export class ActionsDashboardConfigComponent {
  protected appRouting = AppRouting;

  protected commitsHistoryCount =
    inject(AndActionDataService).commitsDashboardConfig?.commitsHistoryCount;

  protected updateIntervalInSeconds =
    inject(AndActionDataService).commitsDashboardConfig?.updateIntervalInSeconds ?? DEFAULT_UPDATE_INTERVAL_IN_SECONDS;

  private readonly andActionDataService = inject(AndActionDataService);
  private readonly router = inject(Router);

  onSave() {
    this.andActionDataService.saveCommitsDashboardConfig(
      new CommitsDashboardConfig(this.commitsHistoryCount, this.updateIntervalInSeconds),
    );

    this.router.navigate([AppRouting.DASHBOARD]);
  }
}
