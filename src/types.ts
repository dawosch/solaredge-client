export type SearchText = 'Name' | 'Notes' | 'Address' | 'City' | 'Zip code' | 'Full address' | 'Country';
export type SortProperty = 'Name' | 'Country' | 'State' | 'City' | 'Address' | 'Zip' | 'Status' | 'PeakPower' | 'InstallationDate' | 'Amount' | 'MaxSeverity' | 'CreationTime';
export type SortOrder = 'ASC' | 'DESC';
export type Status = 'Active' | 'Pending' | 'Disabled' | 'All';

export type TimeUnit = 'QUATER_OF_AN_HOUR' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';

export type SiteDataResponse = {
  id: number;
  name: string;
  accountId: number;
  status: Status[];
  peakPower: number;
  currency: string;
  installationDate: Date;
  ptoDate: Date;
  notes: string;
  type: string;
  location: {
    country: string;
    state: string;
    city: string;
    address: string;
    address2: string;
    zip: string;
    timeZone: string;
  };
  alertQuantity: number;
  alertSeverty: string;
  uris: {
    PUBLIC_URL: string;
    IMAGE_URI: string;
  };
  publicSettings: {
    name: string;
    isPublic: boolean;
  };
};

export type SiteListResponse = {
  Sites: {
    count: number;
    list: SiteDataResponse[];
  };
};

export type SiteDetailResponse = {
  details: SiteDataResponse;
};

export type SiteEnergyParams = { siteId: string; startDate: string; endDate: string; timeUnit: TimeUnit };

export type SiteEnergyResponse = {
  energy: {
    timeUnit: TimeUnit;
    unit: string;
    values: {
      date: Date;
      value: number;
    }[];
  };
};

export type SitePowerParams = { siteId: string; startTime: string; endTime: string };

export type SitePowerResponse = {
  power: {
    timeUnit: TimeUnit;
    unit: string;
    values: {
      date: Date;
      value: number;
    }[];
  };
};

export type SiteOverviewResponse = {
  owerview: {
    lastUpdateTime: string;
    lifeTimeData: {
      energy: number;
      revenue: number;
    };
    lastYearData: {
      energy: number;
      revenue: number;
    };
    lastMonthData: {
      energy: number;
      revenue: number;
    };
    lastDayData: {
      energy: number;
      revenue: number;
    };
    currentPower: {
      power: number;
    };
  };
};
