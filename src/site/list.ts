// import fetch from 'node-fetch';
import axios from 'axios';
import { SearchText, SiteListResponse, SortOrder, SortProperty, Status } from '../types';

const PATHNAME = '/sites/list';

export const getList = async (
  token: string,
  origin: string,
  params?: {
    size?: number;
    startIndex?: number;
    searchText?: SearchText;
    sortProperty?: SortProperty;
    sortOrder?: SortOrder;
    status?: Status[];
  }
): Promise<SiteListResponse> => {
  let url = `${origin}/${PATHNAME}`;

  if (params) {
    const { size, startIndex, searchText, sortProperty, sortOrder, status } = params;
    let search: string = '?';

    search += size ? `size=${size}&` : '';
    search += startIndex ? `startIndex=${startIndex}&` : '';
    search += searchText ? `searchText=${searchText}&` : '';
    search += sortProperty ? `sortProperty=${sortProperty}&` : '';
    search += sortOrder ? `sortOrder=${sortOrder}&` : '';
    search += status ? `status=${status}&` : '';

    // if (search.length > 1) {
    //   search = search.substring(0, search.length - 1);
    //   url += encodeURI(search);
    // }

    url += encodeURI(search);
  } else {
    url += '?';
  }

  url += `api_key=${token}`;

  const res = await axios.get(url, { headers: { accept: 'application/json' } });
  const data = res.data as SiteListResponse;

  return data;
};
