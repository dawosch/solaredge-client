import { getList, getDetails, getEnergy } from './api/site';
import { SiteEnergyParams } from './types';

const API_ORIGIN = 'https://monitoringapi.solaredge.com';

export class SolarEdgeClient {
  constructor(token: string, customOrigin?: string) {
    const origin = customOrigin ?? API_ORIGIN;

    this.siteData = {
      getList: () => getList(token, origin),
      getDetails: (siteId: string) => getDetails(token, origin, siteId),
      getEnergy: (params: SiteEnergyParams) => getEnergy(token, origin, params),
    };
  }

  public siteData;
}
