// import fetch from 'node-fetch';
import axios from 'axios';
import { SiteOverviewResponse } from '../types';

export const getOverview = async (token: string, origin: string, siteId: string): Promise<SiteOverviewResponse> => {
  const url = `${origin}/site/${siteId}/overview?api_key=${token}`;

  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  const data = res.data as SiteOverviewResponse;

  return data;
};
