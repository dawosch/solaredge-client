// import fetch from 'node-fetch';
import axios from 'axios';
import { SiteDetailResponse } from '../types';

export const getDetails = async (token: string, origin: string, siteId: string): Promise<SiteDetailResponse> => {
  let url = `${origin}/site/${siteId}/details`;
  url += encodeURI(`api_key=${token}`);

  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  const data = res.data as SiteDetailResponse;

  return data;
};
