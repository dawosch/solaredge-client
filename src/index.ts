import { getList, getDetails, getEnergy, getOverview, getPower } from './site';
import { SiteEnergyParams, SitePowerParams } from './types';

const API_ORIGIN = 'https://monitoringapi.solaredge.com';

class SolarEdgeClient {
  private token: string;
  private origin: string;
  constructor(token: string, customOrigin?: string) {
    this.token = token;
    this.origin = customOrigin ?? API_ORIGIN;
  }

  public getList = () => getList(this.token, this.origin);
  public getDetails = (siteId: string) => getDetails(this.token, this.origin, siteId);
  public getEnergy = (params: SiteEnergyParams) => getEnergy(this.token, this.origin, params);
  public getPower = (params: SitePowerParams) => getPower(this.token, this.origin, params);
  public getOverview = (siteId: string) => getOverview(this.token, this.origin, siteId);
}

export default SolarEdgeClient;
