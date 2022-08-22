// https://docs.universalis.app

import http from '@/https';
import type { YWZResponse } from '@/https';
import type { HistoryView } from '@/interface';
// { "id": 1173, "name": "宇宙和音" },

export function getSaleHistory(
  worldDcRegion: string,
  itemIds: string | number,
  entriesWithin?: string | number
):Promise<YWZResponse<HistoryView>> {
  return http({
    url: `history/${worldDcRegion}/${itemIds}`,
    params: { entriesWithin },
  });
}

export function getSalecurrent(
  worldDcRegion: string,
  itemIds: string | number,
  statsWithin?: string | number,
  entriesWithin?: string | number
) {
  return http({
    url: `${worldDcRegion}/${itemIds}`,
    params: { statsWithin, entriesWithin },
  });
}
