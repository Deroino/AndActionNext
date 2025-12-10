export const DEFAULT_COMMITS_HISTORY_COUNT = 20;
export const DEFAULT_UPDATE_INTERVAL_IN_SECONDS = 60;

export class CommitsDashboardConfig {
  constructor(
    public commitsHistoryCount: number,
    public updateIntervalInSeconds: number = DEFAULT_UPDATE_INTERVAL_IN_SECONDS
  ) {}
}
