// import fetch from 'node-fetch';
import axios from 'axios';
import { SiteEnergyParams, SiteEnergyResponse } from '../../types';

export const getEnergy = async (token: string, origin: string, { siteId, startDate, endDate, timeUnit }: SiteEnergyParams): Promise<SiteEnergyResponse> => {
  let url = `${origin}/site/${siteId}/energy`;
  url += encodeURI(`?startDate=${startDate}`);
  url += encodeURI(`&endDate=${endDate}`);
  url += encodeURI(`&timeUnit=${timeUnit}`);
  url += encodeURI(`&api_key=${token}`);

  console.log(url);

  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  const data = res.data as SiteEnergyResponse;

  return data;
};
