export interface HistoryView {
  // The item ID.
  itemID: number; // int32
  // The world ID, if applicable.
  worldID?: number; // int32
  // The last upload time for this endpoint, in milliseconds since the UNIX epoch.
  lastUploadTime: number; // int64
  // The historical sales.
  entries?: MinimizedSaleView[];
  // The DC name, if applicable.
  dcName?: string;
  // The region name, if applicable.
  regionName?: string;
  // A map of quantities to sale counts, representing the number of sales of each quantity.
  stackSizeHistogram?: Object;
  // A map of quantities to NQ sale counts, representing the number of sales of each quantity.
  stackSizeHistogramNQ?: Object;
  // A map of quantities to HQ sale counts, representing the number of sales of each quantity.
  stackSizeHistogramHQ?: Object;
  // The average number of sales per day, over the past seven days (or the entirety of the shown sales, whichever comes first).
  regularSaleVelocity: number;
  // The average number of NQ sales per day, over the past seven days (or the entirety of the shown sales, whichever comes first).
  nqSaleVelocity: number;
  // The average number of HQ sales per day, over the past seven days (or the entirety of the shown sales, whichever comes first).
  hqSaleVelocity: number;
  // The world name, if applicable.
  worldName?: string;
}

interface MinimizedSaleView {
  // Whether or not the item was high-quality.
  hq: boolean;
  // The price per unit sold.
  pricePerUnit: number; // int32
  // The stack size sold.
  quantity: number; // int32
  // The buyer's character name. This may be null.
  buyerName?: string;
  // Whether or not this was purchased from a mannequin. This may be null.
  onMannequin?: boolean;
  // The sale time, in seconds since the UNIX epoch.
  timestamp: number; // int64
  // The world name, if applicable.
  worldName?: string;
  // The world ID, if applicable.
  worldID?: number; // int32
}

export interface XIVAPIItemView {
  Pagination: {
    Page: number;
    Results: number;
    ResultsPerPage: number;
    ResultsTotal: number;
  };

  Results: XIVAPIItemResultView[];
}
export interface XIVAPIItemResultView {
  ID: number;
  Icon: string;
  Name: string;
  Url: string;
  UrlType: string;
}
