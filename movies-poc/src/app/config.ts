export interface ApiConfig {
  api_key: string;
  search_type: string;
  plot_type: string;
  page: number;
}

export const API_CONFIG: ApiConfig = {
  api_key : '8c4cdf8b',
  search_type : 'movie',
  plot_type : 'short',
  page : 1
};
