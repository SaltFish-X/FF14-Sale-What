import http from '@/https';
import type { YWZResponse } from '@/https';
import type { XIVAPIItemView } from '@/interface';
const indexes = 'Item';

export function searchItemByEnglish(
  string: string
): Promise<YWZResponse<XIVAPIItemView>> {
  return http({
    url: 'https://xivapi.com/search',
    params: { string, indexes },
  });
}

export function searchItemByChina(
  string: string
): Promise<YWZResponse<XIVAPIItemView>> {
  return http({
    url: 'https://cafemaker.wakingsands.com/search',
    params: { string, indexes },
  });
}

export function searchItem (string: string){
 return Promise.all([searchItemByEnglish(string), searchItemByChina(string)])
}
