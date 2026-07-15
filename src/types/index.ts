// Types for Admin App (Building-Specific)
export interface Building {
  id: string;
  buildingCode: string;
  buildingName: string;
  buildingNo: string;
  address: string;
  location?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface UnitInfo {
  id: string;
  buildingCode: string;
  unitNo: string;
  accessNo: string;
  sakenName: string;
  sakenLastName?: string | null;
  phone?: string | null;
  email?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Parking {
  id: string;
  buildingCode: string;
  buildingName?: string | null;
  buildingNo?: string | null;
  parkingName?: string | null;
  parkingNo: string;
  parkingLots?: number | null;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Reserving {
  id: string;
  dateTime: string;
  parkingNo: string;
  vehicleCode?: string | null;
  accessNo: string;
  phone?: string | null;
  email?: string | null;
  duration?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

// Helper to get building code from user attributes
export const getBuildingCodeFromUser = (user: any): string | null => {
  const attributes = user?.signInDetails?.loginId || user?.attributes;
  return attributes?.['custom:buildingCode'] || null;
};
