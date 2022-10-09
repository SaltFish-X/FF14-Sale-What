// https://docs.universalis.app

import http from '@/https';
import type { YWZResponse } from '@/https';
import type { HistoryView, HistorysView,CurrentlyShownMultiViewV2,CurrentlyShownView } from '@/interface';

export function getSaleHistoryOne(
  worldDcRegion: string,
  itemIds: string ,
  entriesWithin?: string | number
): Promise<YWZResponse<HistoryView>> {
  return http({
    url: `history/${worldDcRegion}/${itemIds}`,
    params: { entriesWithin },
  });
}

export function getSaleHistorys(
  worldDcRegion: string,
  itemIds: string,
  entriesWithin?: string | number
): Promise<YWZResponse<HistorysView>> {
  return http({
    url: `history/${worldDcRegion}/${itemIds}`,
    params: { entriesWithin },
  });
}

export function getSalecurrent(
  worldDcRegion: string,
  itemIds: string,
  statsWithin?: string | number,
  entriesWithin?: string | number
): Promise<YWZResponse<CurrentlyShownMultiViewV2>> {
  return http({
    url: `${worldDcRegion}/${itemIds}`,
    params: { statsWithin, entriesWithin },
  });
}


export function getSalecurrentOne(
  worldDcRegion: string,
  itemIds: string,
  statsWithin?: string | number,
  entriesWithin?: string | number
): Promise<YWZResponse<CurrentlyShownView>> {
  return http({
    url: `${worldDcRegion}/${itemIds}`,
    params: { statsWithin, entriesWithin },
  });
}