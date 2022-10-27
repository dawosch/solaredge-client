// import fetch from 'node-fetch';
import axios from 'axios';
import { SitePowerParams, SitePowerResponse } from '../types';

export const getPower = async (token: string, origin: string, { siteId, startTime, endTime }: SitePowerParams): Promise<SitePowerResponse> => {
  let url = `${origin}/site/${siteId}/power`;
  url += encodeURI(`?startDate=${startTime}`);
  url += encodeURI(`&endDate=${endTime}`);
  url += encodeURI(`&api_key=${token}`);

  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  const data = res.data as SitePowerResponse;

  return data;
};
