// import fetch from 'node-fetch';
import axios from 'axios';
import { SitePowerResponse } from '../../types';

export const getEnergy = async (
  token: string,
  origin: string,
  {
    siteId,
    startTime,
    endTime,
  }: {
    siteId: number;
    startTime: string;
    endTime: string;
  }
): Promise<SitePowerResponse> => {
  let url = `${origin}/site/${siteId}/power`;
  url += encodeURI(`?startDate=${startTime}`);
  url += encodeURI(`&endDate=${endTime}`);
  url += encodeURI(`&api_key=${token}`);

  console.log(url);

  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  const data = res.data as SitePowerResponse;

  return data;
};
