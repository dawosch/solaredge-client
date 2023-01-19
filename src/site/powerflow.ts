import axios from 'axios';
import { SitePowerFlowResponse } from '../types';

export const getPowerFlow = async (token: string, origin: string, siteId: string): Promise<SitePowerFlowResponse> => {
  const url = `${origin}/site/${siteId}/currentPowerFlow?api_key=${token}`;

  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  const data = res.data as SitePowerFlowResponse;

  return data;
};
