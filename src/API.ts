/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Admin = {
  __typename: "Admin",
  address?: string | null,
  assignedParkingIds?: Array< string | null > | null,
  buildingCode: string,
  buildingName?: string | null,
  buildingNo?: string | null,
  cognitoUsername?: string | null,
  createdAt: string,
  email: string,
  id: string,
  managerCode: string,
  managerName: string,
  phoneNo?: string | null,
  updatedAt: string,
};

export type Building = {
  __typename: "Building",
  address: string,
  buildingCode: string,
  buildingName: string,
  buildingNo: string,
  createdAt: string,
  id: string,
  location?: string | null,
  updatedAt: string,
};

export type Parking = {
  __typename: "Parking",
  buildingCode: string,
  buildingName?: string | null,
  buildingNo?: string | null,
  createdAt: string,
  description?: string | null,
  id: string,
  parkingLots?: number | null,
  parkingName?: string | null,
  parkingNo: string,
  updatedAt: string,
};

export type ParkingSpot = {
  __typename: "ParkingSpot",
  buildingCode: string,
  createdAt: string,
  description?: string | null,
  floor?: string | null,
  id: string,
  isAvailable?: boolean | null,
  parkingId: string,
  section?: string | null,
  spotNumber: string,
  spotType?: ParkingSpotSpotType | null,
  updatedAt: string,
};

export enum ParkingSpotSpotType {
  ELECTRIC = "ELECTRIC",
  GUEST = "GUEST",
  REGULAR = "REGULAR",
}


export type Reserving = {
  __typename: "Reserving",
  accessNo: string,
  buildingCode: string,
  createdAt: string,
  email?: string | null,
  endTime: string,
  id: string,
  phone?: string | null,
  reservedBy?: string | null,
  spotId: string,
  startTime: string,
  status?: ReservingStatus | null,
  updatedAt: string,
  vehicleCode?: string | null,
};

export enum ReservingStatus {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}


export type UnitInfo = {
  __typename: "UnitInfo",
  accessNo: string,
  buildingCode: string,
  cognitoUsername?: string | null,
  createdAt: string,
  email?: string | null,
  firstName: string,
  id: string,
  lastName: string,
  phone?: string | null,
  sakenLastName?: string | null,
  sakenName?: string | null,
  unitNo: string,
  updatedAt: string,
  username: string,
};

export type ModelAdminFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelAdminFilterInput | null > | null,
  assignedParkingIds?: ModelStringInput | null,
  buildingCode?: ModelStringInput | null,
  buildingName?: ModelStringInput | null,
  buildingNo?: ModelStringInput | null,
  cognitoUsername?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  managerCode?: ModelStringInput | null,
  managerName?: ModelStringInput | null,
  not?: ModelAdminFilterInput | null,
  or?: Array< ModelAdminFilterInput | null > | null,
  phoneNo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelAdminConnection = {
  __typename: "ModelAdminConnection",
  items:  Array<Admin | null >,
  nextToken?: string | null,
};

export type ModelBuildingFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelBuildingFilterInput | null > | null,
  buildingCode?: ModelStringInput | null,
  buildingName?: ModelStringInput | null,
  buildingNo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  location?: ModelStringInput | null,
  not?: ModelBuildingFilterInput | null,
  or?: Array< ModelBuildingFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBuildingConnection = {
  __typename: "ModelBuildingConnection",
  items:  Array<Building | null >,
  nextToken?: string | null,
};

export type ListCognitoUsersReturnType = {
  __typename: "ListCognitoUsersReturnType",
  items:  Array<CognitoUser | null >,
  nextToken?: string | null,
};

export type CognitoUser = {
  __typename: "CognitoUser",
  accessNo?: string | null,
  buildingCode?: string | null,
  createdAt?: string | null,
  email: string,
  groups?: Array< string | null > | null,
  id: string,
  isActive?: boolean | null,
  managerCode?: string | null,
  name?: string | null,
  phone?: string | null,
  unitNo?: string | null,
  updatedAt?: string | null,
  userRole?: string | null,
  userStatus?: string | null,
};

export type ModelParkingSpotFilterInput = {
  and?: Array< ModelParkingSpotFilterInput | null > | null,
  buildingCode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  floor?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isAvailable?: ModelBooleanInput | null,
  not?: ModelParkingSpotFilterInput | null,
  or?: Array< ModelParkingSpotFilterInput | null > | null,
  parkingId?: ModelIDInput | null,
  section?: ModelStringInput | null,
  spotNumber?: ModelStringInput | null,
  spotType?: ModelParkingSpotSpotTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelParkingSpotSpotTypeInput = {
  eq?: ParkingSpotSpotType | null,
  ne?: ParkingSpotSpotType | null,
};

export type ModelParkingSpotConnection = {
  __typename: "ModelParkingSpotConnection",
  items:  Array<ParkingSpot | null >,
  nextToken?: string | null,
};

export type ModelParkingFilterInput = {
  and?: Array< ModelParkingFilterInput | null > | null,
  buildingCode?: ModelStringInput | null,
  buildingName?: ModelStringInput | null,
  buildingNo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelParkingFilterInput | null,
  or?: Array< ModelParkingFilterInput | null > | null,
  parkingLots?: ModelIntInput | null,
  parkingName?: ModelStringInput | null,
  parkingNo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelParkingConnection = {
  __typename: "ModelParkingConnection",
  items:  Array<Parking | null >,
  nextToken?: string | null,
};

export type ModelReservingFilterInput = {
  accessNo?: ModelStringInput | null,
  and?: Array< ModelReservingFilterInput | null > | null,
  buildingCode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelReservingFilterInput | null,
  or?: Array< ModelReservingFilterInput | null > | null,
  phone?: ModelStringInput | null,
  reservedBy?: ModelStringInput | null,
  spotId?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  status?: ModelReservingStatusInput | null,
  updatedAt?: ModelStringInput | null,
  vehicleCode?: ModelStringInput | null,
};

export type ModelReservingStatusInput = {
  eq?: ReservingStatus | null,
  ne?: ReservingStatus | null,
};

export type ModelReservingConnection = {
  __typename: "ModelReservingConnection",
  items:  Array<Reserving | null >,
  nextToken?: string | null,
};

export type ModelUnitInfoFilterInput = {
  accessNo?: ModelStringInput | null,
  and?: Array< ModelUnitInfoFilterInput | null > | null,
  buildingCode?: ModelStringInput | null,
  cognitoUsername?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUnitInfoFilterInput | null,
  or?: Array< ModelUnitInfoFilterInput | null > | null,
  phone?: ModelStringInput | null,
  sakenLastName?: ModelStringInput | null,
  sakenName?: ModelStringInput | null,
  unitNo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUnitInfoConnection = {
  __typename: "ModelUnitInfoConnection",
  items:  Array<UnitInfo | null >,
  nextToken?: string | null,
};

export type ModelAdminConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelAdminConditionInput | null > | null,
  assignedParkingIds?: ModelStringInput | null,
  buildingCode?: ModelStringInput | null,
  buildingName?: ModelStringInput | null,
  buildingNo?: ModelStringInput | null,
  cognitoUsername?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  managerCode?: ModelStringInput | null,
  managerName?: ModelStringInput | null,
  not?: ModelAdminConditionInput | null,
  or?: Array< ModelAdminConditionInput | null > | null,
  phoneNo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAdminInput = {
  address?: string | null,
  assignedParkingIds?: Array< string | null > | null,
  buildingCode: string,
  buildingName?: string | null,
  buildingNo?: string | null,
  cognitoUsername?: string | null,
  email: string,
  id?: string | null,
  managerCode: string,
  managerName: string,
  phoneNo?: string | null,
};

export type CreateAdminWithCognitoReturnType = {
  __typename: "CreateAdminWithCognitoReturnType",
  adminId?: string | null,
  cognitoUsername?: string | null,
  message: string,
  success: boolean,
  temporaryPassword?: string | null,
};

export type ModelBuildingConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelBuildingConditionInput | null > | null,
  buildingCode?: ModelStringInput | null,
  buildingName?: ModelStringInput | null,
  buildingNo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  location?: ModelStringInput | null,
  not?: ModelBuildingConditionInput | null,
  or?: Array< ModelBuildingConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateBuildingInput = {
  address: string,
  buildingCode: string,
  buildingName: string,
  buildingNo: string,
  id?: string | null,
  location?: string | null,
};

export type ModelParkingConditionInput = {
  and?: Array< ModelParkingConditionInput | null > | null,
  buildingCode?: ModelStringInput | null,
  buildingName?: ModelStringInput | null,
  buildingNo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelParkingConditionInput | null,
  or?: Array< ModelParkingConditionInput | null > | null,
  parkingLots?: ModelIntInput | null,
  parkingName?: ModelStringInput | null,
  parkingNo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateParkingInput = {
  buildingCode: string,
  buildingName?: string | null,
  buildingNo?: string | null,
  description?: string | null,
  id?: string | null,
  parkingLots?: number | null,
  parkingName?: string | null,
  parkingNo: string,
};

export type ModelParkingSpotConditionInput = {
  and?: Array< ModelParkingSpotConditionInput | null > | null,
  buildingCode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  floor?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  not?: ModelParkingSpotConditionInput | null,
  or?: Array< ModelParkingSpotConditionInput | null > | null,
  parkingId?: ModelIDInput | null,
  section?: ModelStringInput | null,
  spotNumber?: ModelStringInput | null,
  spotType?: ModelParkingSpotSpotTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateParkingSpotInput = {
  buildingCode: string,
  description?: string | null,
  floor?: string | null,
  id?: string | null,
  isAvailable?: boolean | null,
  parkingId: string,
  section?: string | null,
  spotNumber: string,
  spotType?: ParkingSpotSpotType | null,
};

export type ModelReservingConditionInput = {
  accessNo?: ModelStringInput | null,
  and?: Array< ModelReservingConditionInput | null > | null,
  buildingCode?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  not?: ModelReservingConditionInput | null,
  or?: Array< ModelReservingConditionInput | null > | null,
  phone?: ModelStringInput | null,
  reservedBy?: ModelStringInput | null,
  spotId?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  status?: ModelReservingStatusInput | null,
  updatedAt?: ModelStringInput | null,
  vehicleCode?: ModelStringInput | null,
};

export type CreateReservingInput = {
  accessNo: string,
  buildingCode: string,
  email?: string | null,
  endTime: string,
  id?: string | null,
  phone?: string | null,
  reservedBy?: string | null,
  spotId: string,
  startTime: string,
  status?: ReservingStatus | null,
  vehicleCode?: string | null,
};

export type ModelUnitInfoConditionInput = {
  accessNo?: ModelStringInput | null,
  and?: Array< ModelUnitInfoConditionInput | null > | null,
  buildingCode?: ModelStringInput | null,
  cognitoUsername?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUnitInfoConditionInput | null,
  or?: Array< ModelUnitInfoConditionInput | null > | null,
  phone?: ModelStringInput | null,
  sakenLastName?: ModelStringInput | null,
  sakenName?: ModelStringInput | null,
  unitNo?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUnitInfoInput = {
  accessNo: string,
  buildingCode: string,
  cognitoUsername?: string | null,
  email?: string | null,
  firstName: string,
  id?: string | null,
  lastName: string,
  phone?: string | null,
  sakenLastName?: string | null,
  sakenName?: string | null,
  unitNo: string,
  username: string,
};

export type DeleteAdminInput = {
  id: string,
};

export type DeleteAdminFromCognitoReturnType = {
  __typename: "DeleteAdminFromCognitoReturnType",
  message: string,
  success: boolean,
};

export type DeleteBuildingInput = {
  id: string,
};

export type DeleteParkingInput = {
  id: string,
};

export type DeleteParkingSpotInput = {
  id: string,
};

export type DeleteReservingInput = {
  id: string,
};

export type DeleteUnitInfoInput = {
  id: string,
};

export type SuspendAdminInCognitoReturnType = {
  __typename: "SuspendAdminInCognitoReturnType",
  message: string,
  success: boolean,
};

export type UpdateAdminInput = {
  address?: string | null,
  assignedParkingIds?: Array< string | null > | null,
  buildingCode?: string | null,
  buildingName?: string | null,
  buildingNo?: string | null,
  cognitoUsername?: string | null,
  email?: string | null,
  id: string,
  managerCode?: string | null,
  managerName?: string | null,
  phoneNo?: string | null,
};

export type UpdateBuildingInput = {
  address?: string | null,
  buildingCode?: string | null,
  buildingName?: string | null,
  buildingNo?: string | null,
  id: string,
  location?: string | null,
};

export type UpdateParkingInput = {
  buildingCode?: string | null,
  buildingName?: string | null,
  buildingNo?: string | null,
  description?: string | null,
  id: string,
  parkingLots?: number | null,
  parkingName?: string | null,
  parkingNo?: string | null,
};

export type UpdateParkingSpotInput = {
  buildingCode?: string | null,
  description?: string | null,
  floor?: string | null,
  id: string,
  isAvailable?: boolean | null,
  parkingId?: string | null,
  section?: string | null,
  spotNumber?: string | null,
  spotType?: ParkingSpotSpotType | null,
};

export type UpdateReservingInput = {
  accessNo?: string | null,
  buildingCode?: string | null,
  email?: string | null,
  endTime?: string | null,
  id: string,
  phone?: string | null,
  reservedBy?: string | null,
  spotId?: string | null,
  startTime?: string | null,
  status?: ReservingStatus | null,
  vehicleCode?: string | null,
};

export type UpdateUnitInfoInput = {
  accessNo?: string | null,
  buildingCode?: string | null,
  cognitoUsername?: string | null,
  email?: string | null,
  firstName?: string | null,
  id: string,
  lastName?: string | null,
  phone?: string | null,
  sakenLastName?: string | null,
  sakenName?: string | null,
  unitNo?: string | null,
  username?: string | null,
};

export type ModelSubscriptionAdminFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminFilterInput | null > | null,
  assignedParkingIds?: ModelSubscriptionStringInput | null,
  buildingCode?: ModelSubscriptionStringInput | null,
  buildingName?: ModelSubscriptionStringInput | null,
  buildingNo?: ModelSubscriptionStringInput | null,
  cognitoUsername?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  managerCode?: ModelSubscriptionStringInput | null,
  managerName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAdminFilterInput | null > | null,
  phoneNo?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBuildingFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBuildingFilterInput | null > | null,
  buildingCode?: ModelSubscriptionStringInput | null,
  buildingName?: ModelSubscriptionStringInput | null,
  buildingNo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  location?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionBuildingFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionParkingFilterInput = {
  and?: Array< ModelSubscriptionParkingFilterInput | null > | null,
  buildingCode?: ModelSubscriptionStringInput | null,
  buildingName?: ModelSubscriptionStringInput | null,
  buildingNo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionParkingFilterInput | null > | null,
  parkingLots?: ModelSubscriptionIntInput | null,
  parkingName?: ModelSubscriptionStringInput | null,
  parkingNo?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionParkingSpotFilterInput = {
  and?: Array< ModelSubscriptionParkingSpotFilterInput | null > | null,
  buildingCode?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  floor?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isAvailable?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionParkingSpotFilterInput | null > | null,
  parkingId?: ModelSubscriptionIDInput | null,
  section?: ModelSubscriptionStringInput | null,
  spotNumber?: ModelSubscriptionStringInput | null,
  spotType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionReservingFilterInput = {
  accessNo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReservingFilterInput | null > | null,
  buildingCode?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionReservingFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  reservedBy?: ModelSubscriptionStringInput | null,
  spotId?: ModelSubscriptionIDInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  vehicleCode?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUnitInfoFilterInput = {
  accessNo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUnitInfoFilterInput | null > | null,
  buildingCode?: ModelSubscriptionStringInput | null,
  cognitoUsername?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUnitInfoFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  sakenLastName?: ModelSubscriptionStringInput | null,
  sakenName?: ModelSubscriptionStringInput | null,
  unitNo?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type GetAdminQueryVariables = {
  id: string,
};

export type GetAdminQuery = {
  getAdmin?:  {
    __typename: "Admin",
    address?: string | null,
    assignedParkingIds?: Array< string | null > | null,
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    cognitoUsername?: string | null,
    createdAt: string,
    email: string,
    id: string,
    managerCode: string,
    managerName: string,
    phoneNo?: string | null,
    updatedAt: string,
  } | null,
};

export type GetBuildingQueryVariables = {
  id: string,
};

export type GetBuildingQuery = {
  getBuilding?:  {
    __typename: "Building",
    address: string,
    buildingCode: string,
    buildingName: string,
    buildingNo: string,
    createdAt: string,
    id: string,
    location?: string | null,
    updatedAt: string,
  } | null,
};

export type GetParkingQueryVariables = {
  id: string,
};

export type GetParkingQuery = {
  getParking?:  {
    __typename: "Parking",
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    parkingLots?: number | null,
    parkingName?: string | null,
    parkingNo: string,
    updatedAt: string,
  } | null,
};

export type GetParkingSpotQueryVariables = {
  id: string,
};

export type GetParkingSpotQuery = {
  getParkingSpot?:  {
    __typename: "ParkingSpot",
    buildingCode: string,
    createdAt: string,
    description?: string | null,
    floor?: string | null,
    id: string,
    isAvailable?: boolean | null,
    parkingId: string,
    section?: string | null,
    spotNumber: string,
    spotType?: ParkingSpotSpotType | null,
    updatedAt: string,
  } | null,
};

export type GetReservingQueryVariables = {
  id: string,
};

export type GetReservingQuery = {
  getReserving?:  {
    __typename: "Reserving",
    accessNo: string,
    buildingCode: string,
    createdAt: string,
    email?: string | null,
    endTime: string,
    id: string,
    phone?: string | null,
    reservedBy?: string | null,
    spotId: string,
    startTime: string,
    status?: ReservingStatus | null,
    updatedAt: string,
    vehicleCode?: string | null,
  } | null,
};

export type GetUnitInfoQueryVariables = {
  id: string,
};

export type GetUnitInfoQuery = {
  getUnitInfo?:  {
    __typename: "UnitInfo",
    accessNo: string,
    buildingCode: string,
    cognitoUsername?: string | null,
    createdAt: string,
    email?: string | null,
    firstName: string,
    id: string,
    lastName: string,
    phone?: string | null,
    sakenLastName?: string | null,
    sakenName?: string | null,
    unitNo: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type ListAdminsQueryVariables = {
  filter?: ModelAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminsQuery = {
  listAdmins?:  {
    __typename: "ModelAdminConnection",
    items:  Array< {
      __typename: "Admin",
      address?: string | null,
      assignedParkingIds?: Array< string | null > | null,
      buildingCode: string,
      buildingName?: string | null,
      buildingNo?: string | null,
      cognitoUsername?: string | null,
      createdAt: string,
      email: string,
      id: string,
      managerCode: string,
      managerName: string,
      phoneNo?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBuildingsQueryVariables = {
  filter?: ModelBuildingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuildingsQuery = {
  listBuildings?:  {
    __typename: "ModelBuildingConnection",
    items:  Array< {
      __typename: "Building",
      address: string,
      buildingCode: string,
      buildingName: string,
      buildingNo: string,
      createdAt: string,
      id: string,
      location?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCognitoUsersQueryVariables = {
  filter?: string | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCognitoUsersQuery = {
  listCognitoUsers?:  {
    __typename: "ListCognitoUsersReturnType",
    items:  Array< {
      __typename: "CognitoUser",
      accessNo?: string | null,
      buildingCode?: string | null,
      createdAt?: string | null,
      email: string,
      groups?: Array< string | null > | null,
      id: string,
      isActive?: boolean | null,
      managerCode?: string | null,
      name?: string | null,
      phone?: string | null,
      unitNo?: string | null,
      updatedAt?: string | null,
      userRole?: string | null,
      userStatus?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParkingSpotsQueryVariables = {
  filter?: ModelParkingSpotFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParkingSpotsQuery = {
  listParkingSpots?:  {
    __typename: "ModelParkingSpotConnection",
    items:  Array< {
      __typename: "ParkingSpot",
      buildingCode: string,
      createdAt: string,
      description?: string | null,
      floor?: string | null,
      id: string,
      isAvailable?: boolean | null,
      parkingId: string,
      section?: string | null,
      spotNumber: string,
      spotType?: ParkingSpotSpotType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParkingsQueryVariables = {
  filter?: ModelParkingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParkingsQuery = {
  listParkings?:  {
    __typename: "ModelParkingConnection",
    items:  Array< {
      __typename: "Parking",
      buildingCode: string,
      buildingName?: string | null,
      buildingNo?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      parkingLots?: number | null,
      parkingName?: string | null,
      parkingNo: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListReservingsQueryVariables = {
  filter?: ModelReservingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservingsQuery = {
  listReservings?:  {
    __typename: "ModelReservingConnection",
    items:  Array< {
      __typename: "Reserving",
      accessNo: string,
      buildingCode: string,
      createdAt: string,
      email?: string | null,
      endTime: string,
      id: string,
      phone?: string | null,
      reservedBy?: string | null,
      spotId: string,
      startTime: string,
      status?: ReservingStatus | null,
      updatedAt: string,
      vehicleCode?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUnitInfosQueryVariables = {
  filter?: ModelUnitInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitInfosQuery = {
  listUnitInfos?:  {
    __typename: "ModelUnitInfoConnection",
    items:  Array< {
      __typename: "UnitInfo",
      accessNo: string,
      buildingCode: string,
      cognitoUsername?: string | null,
      createdAt: string,
      email?: string | null,
      firstName: string,
      id: string,
      lastName: string,
      phone?: string | null,
      sakenLastName?: string | null,
      sakenName?: string | null,
      unitNo: string,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAdminMutationVariables = {
  condition?: ModelAdminConditionInput | null,
  input: CreateAdminInput,
};

export type CreateAdminMutation = {
  createAdmin?:  {
    __typename: "Admin",
    address?: string | null,
    assignedParkingIds?: Array< string | null > | null,
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    cognitoUsername?: string | null,
    createdAt: string,
    email: string,
    id: string,
    managerCode: string,
    managerName: string,
    phoneNo?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateAdminWithCognitoMutationVariables = {
  address?: string | null,
  buildingCode: string,
  buildingName?: string | null,
  buildingNo?: string | null,
  email: string,
  managerCode: string,
  managerName: string,
  phoneNo?: string | null,
};

export type CreateAdminWithCognitoMutation = {
  createAdminWithCognito?:  {
    __typename: "CreateAdminWithCognitoReturnType",
    adminId?: string | null,
    cognitoUsername?: string | null,
    message: string,
    success: boolean,
    temporaryPassword?: string | null,
  } | null,
};

export type CreateBuildingMutationVariables = {
  condition?: ModelBuildingConditionInput | null,
  input: CreateBuildingInput,
};

export type CreateBuildingMutation = {
  createBuilding?:  {
    __typename: "Building",
    address: string,
    buildingCode: string,
    buildingName: string,
    buildingNo: string,
    createdAt: string,
    id: string,
    location?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateParkingMutationVariables = {
  condition?: ModelParkingConditionInput | null,
  input: CreateParkingInput,
};

export type CreateParkingMutation = {
  createParking?:  {
    __typename: "Parking",
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    parkingLots?: number | null,
    parkingName?: string | null,
    parkingNo: string,
    updatedAt: string,
  } | null,
};

export type CreateParkingSpotMutationVariables = {
  condition?: ModelParkingSpotConditionInput | null,
  input: CreateParkingSpotInput,
};

export type CreateParkingSpotMutation = {
  createParkingSpot?:  {
    __typename: "ParkingSpot",
    buildingCode: string,
    createdAt: string,
    description?: string | null,
    floor?: string | null,
    id: string,
    isAvailable?: boolean | null,
    parkingId: string,
    section?: string | null,
    spotNumber: string,
    spotType?: ParkingSpotSpotType | null,
    updatedAt: string,
  } | null,
};

export type CreateReservingMutationVariables = {
  condition?: ModelReservingConditionInput | null,
  input: CreateReservingInput,
};

export type CreateReservingMutation = {
  createReserving?:  {
    __typename: "Reserving",
    accessNo: string,
    buildingCode: string,
    createdAt: string,
    email?: string | null,
    endTime: string,
    id: string,
    phone?: string | null,
    reservedBy?: string | null,
    spotId: string,
    startTime: string,
    status?: ReservingStatus | null,
    updatedAt: string,
    vehicleCode?: string | null,
  } | null,
};

export type CreateUnitInfoMutationVariables = {
  condition?: ModelUnitInfoConditionInput | null,
  input: CreateUnitInfoInput,
};

export type CreateUnitInfoMutation = {
  createUnitInfo?:  {
    __typename: "UnitInfo",
    accessNo: string,
    buildingCode: string,
    cognitoUsername?: string | null,
    createdAt: string,
    email?: string | null,
    firstName: string,
    id: string,
    lastName: string,
    phone?: string | null,
    sakenLastName?: string | null,
    sakenName?: string | null,
    unitNo: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type DeleteAdminMutationVariables = {
  condition?: ModelAdminConditionInput | null,
  input: DeleteAdminInput,
};

export type DeleteAdminMutation = {
  deleteAdmin?:  {
    __typename: "Admin",
    address?: string | null,
    assignedParkingIds?: Array< string | null > | null,
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    cognitoUsername?: string | null,
    createdAt: string,
    email: string,
    id: string,
    managerCode: string,
    managerName: string,
    phoneNo?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteAdminFromCognitoMutationVariables = {
  username: string,
};

export type DeleteAdminFromCognitoMutation = {
  deleteAdminFromCognito?:  {
    __typename: "DeleteAdminFromCognitoReturnType",
    message: string,
    success: boolean,
  } | null,
};

export type DeleteBuildingMutationVariables = {
  condition?: ModelBuildingConditionInput | null,
  input: DeleteBuildingInput,
};

export type DeleteBuildingMutation = {
  deleteBuilding?:  {
    __typename: "Building",
    address: string,
    buildingCode: string,
    buildingName: string,
    buildingNo: string,
    createdAt: string,
    id: string,
    location?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteParkingMutationVariables = {
  condition?: ModelParkingConditionInput | null,
  input: DeleteParkingInput,
};

export type DeleteParkingMutation = {
  deleteParking?:  {
    __typename: "Parking",
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    parkingLots?: number | null,
    parkingName?: string | null,
    parkingNo: string,
    updatedAt: string,
  } | null,
};

export type DeleteParkingSpotMutationVariables = {
  condition?: ModelParkingSpotConditionInput | null,
  input: DeleteParkingSpotInput,
};

export type DeleteParkingSpotMutation = {
  deleteParkingSpot?:  {
    __typename: "ParkingSpot",
    buildingCode: string,
    createdAt: string,
    description?: string | null,
    floor?: string | null,
    id: string,
    isAvailable?: boolean | null,
    parkingId: string,
    section?: string | null,
    spotNumber: string,
    spotType?: ParkingSpotSpotType | null,
    updatedAt: string,
  } | null,
};

export type DeleteReservingMutationVariables = {
  condition?: ModelReservingConditionInput | null,
  input: DeleteReservingInput,
};

export type DeleteReservingMutation = {
  deleteReserving?:  {
    __typename: "Reserving",
    accessNo: string,
    buildingCode: string,
    createdAt: string,
    email?: string | null,
    endTime: string,
    id: string,
    phone?: string | null,
    reservedBy?: string | null,
    spotId: string,
    startTime: string,
    status?: ReservingStatus | null,
    updatedAt: string,
    vehicleCode?: string | null,
  } | null,
};

export type DeleteUnitInfoMutationVariables = {
  condition?: ModelUnitInfoConditionInput | null,
  input: DeleteUnitInfoInput,
};

export type DeleteUnitInfoMutation = {
  deleteUnitInfo?:  {
    __typename: "UnitInfo",
    accessNo: string,
    buildingCode: string,
    cognitoUsername?: string | null,
    createdAt: string,
    email?: string | null,
    firstName: string,
    id: string,
    lastName: string,
    phone?: string | null,
    sakenLastName?: string | null,
    sakenName?: string | null,
    unitNo: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type SuspendAdminInCognitoMutationVariables = {
  suspend: boolean,
  username: string,
};

export type SuspendAdminInCognitoMutation = {
  suspendAdminInCognito?:  {
    __typename: "SuspendAdminInCognitoReturnType",
    message: string,
    success: boolean,
  } | null,
};

export type UpdateAdminMutationVariables = {
  condition?: ModelAdminConditionInput | null,
  input: UpdateAdminInput,
};

export type UpdateAdminMutation = {
  updateAdmin?:  {
    __typename: "Admin",
    address?: string | null,
    assignedParkingIds?: Array< string | null > | null,
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    cognitoUsername?: string | null,
    createdAt: string,
    email: string,
    id: string,
    managerCode: string,
    managerName: string,
    phoneNo?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateBuildingMutationVariables = {
  condition?: ModelBuildingConditionInput | null,
  input: UpdateBuildingInput,
};

export type UpdateBuildingMutation = {
  updateBuilding?:  {
    __typename: "Building",
    address: string,
    buildingCode: string,
    buildingName: string,
    buildingNo: string,
    createdAt: string,
    id: string,
    location?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateParkingMutationVariables = {
  condition?: ModelParkingConditionInput | null,
  input: UpdateParkingInput,
};

export type UpdateParkingMutation = {
  updateParking?:  {
    __typename: "Parking",
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    parkingLots?: number | null,
    parkingName?: string | null,
    parkingNo: string,
    updatedAt: string,
  } | null,
};

export type UpdateParkingSpotMutationVariables = {
  condition?: ModelParkingSpotConditionInput | null,
  input: UpdateParkingSpotInput,
};

export type UpdateParkingSpotMutation = {
  updateParkingSpot?:  {
    __typename: "ParkingSpot",
    buildingCode: string,
    createdAt: string,
    description?: string | null,
    floor?: string | null,
    id: string,
    isAvailable?: boolean | null,
    parkingId: string,
    section?: string | null,
    spotNumber: string,
    spotType?: ParkingSpotSpotType | null,
    updatedAt: string,
  } | null,
};

export type UpdateReservingMutationVariables = {
  condition?: ModelReservingConditionInput | null,
  input: UpdateReservingInput,
};

export type UpdateReservingMutation = {
  updateReserving?:  {
    __typename: "Reserving",
    accessNo: string,
    buildingCode: string,
    createdAt: string,
    email?: string | null,
    endTime: string,
    id: string,
    phone?: string | null,
    reservedBy?: string | null,
    spotId: string,
    startTime: string,
    status?: ReservingStatus | null,
    updatedAt: string,
    vehicleCode?: string | null,
  } | null,
};

export type UpdateUnitInfoMutationVariables = {
  condition?: ModelUnitInfoConditionInput | null,
  input: UpdateUnitInfoInput,
};

export type UpdateUnitInfoMutation = {
  updateUnitInfo?:  {
    __typename: "UnitInfo",
    accessNo: string,
    buildingCode: string,
    cognitoUsername?: string | null,
    createdAt: string,
    email?: string | null,
    firstName: string,
    id: string,
    lastName: string,
    phone?: string | null,
    sakenLastName?: string | null,
    sakenName?: string | null,
    unitNo: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnCreateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnCreateAdminSubscription = {
  onCreateAdmin?:  {
    __typename: "Admin",
    address?: string | null,
    assignedParkingIds?: Array< string | null > | null,
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    cognitoUsername?: string | null,
    createdAt: string,
    email: string,
    id: string,
    managerCode: string,
    managerName: string,
    phoneNo?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateBuildingSubscriptionVariables = {
  filter?: ModelSubscriptionBuildingFilterInput | null,
};

export type OnCreateBuildingSubscription = {
  onCreateBuilding?:  {
    __typename: "Building",
    address: string,
    buildingCode: string,
    buildingName: string,
    buildingNo: string,
    createdAt: string,
    id: string,
    location?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateParkingSubscriptionVariables = {
  filter?: ModelSubscriptionParkingFilterInput | null,
};

export type OnCreateParkingSubscription = {
  onCreateParking?:  {
    __typename: "Parking",
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    parkingLots?: number | null,
    parkingName?: string | null,
    parkingNo: string,
    updatedAt: string,
  } | null,
};

export type OnCreateParkingSpotSubscriptionVariables = {
  filter?: ModelSubscriptionParkingSpotFilterInput | null,
};

export type OnCreateParkingSpotSubscription = {
  onCreateParkingSpot?:  {
    __typename: "ParkingSpot",
    buildingCode: string,
    createdAt: string,
    description?: string | null,
    floor?: string | null,
    id: string,
    isAvailable?: boolean | null,
    parkingId: string,
    section?: string | null,
    spotNumber: string,
    spotType?: ParkingSpotSpotType | null,
    updatedAt: string,
  } | null,
};

export type OnCreateReservingSubscriptionVariables = {
  filter?: ModelSubscriptionReservingFilterInput | null,
};

export type OnCreateReservingSubscription = {
  onCreateReserving?:  {
    __typename: "Reserving",
    accessNo: string,
    buildingCode: string,
    createdAt: string,
    email?: string | null,
    endTime: string,
    id: string,
    phone?: string | null,
    reservedBy?: string | null,
    spotId: string,
    startTime: string,
    status?: ReservingStatus | null,
    updatedAt: string,
    vehicleCode?: string | null,
  } | null,
};

export type OnCreateUnitInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUnitInfoFilterInput | null,
};

export type OnCreateUnitInfoSubscription = {
  onCreateUnitInfo?:  {
    __typename: "UnitInfo",
    accessNo: string,
    buildingCode: string,
    cognitoUsername?: string | null,
    createdAt: string,
    email?: string | null,
    firstName: string,
    id: string,
    lastName: string,
    phone?: string | null,
    sakenLastName?: string | null,
    sakenName?: string | null,
    unitNo: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnDeleteAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnDeleteAdminSubscription = {
  onDeleteAdmin?:  {
    __typename: "Admin",
    address?: string | null,
    assignedParkingIds?: Array< string | null > | null,
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    cognitoUsername?: string | null,
    createdAt: string,
    email: string,
    id: string,
    managerCode: string,
    managerName: string,
    phoneNo?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteBuildingSubscriptionVariables = {
  filter?: ModelSubscriptionBuildingFilterInput | null,
};

export type OnDeleteBuildingSubscription = {
  onDeleteBuilding?:  {
    __typename: "Building",
    address: string,
    buildingCode: string,
    buildingName: string,
    buildingNo: string,
    createdAt: string,
    id: string,
    location?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteParkingSubscriptionVariables = {
  filter?: ModelSubscriptionParkingFilterInput | null,
};

export type OnDeleteParkingSubscription = {
  onDeleteParking?:  {
    __typename: "Parking",
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    parkingLots?: number | null,
    parkingName?: string | null,
    parkingNo: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteParkingSpotSubscriptionVariables = {
  filter?: ModelSubscriptionParkingSpotFilterInput | null,
};

export type OnDeleteParkingSpotSubscription = {
  onDeleteParkingSpot?:  {
    __typename: "ParkingSpot",
    buildingCode: string,
    createdAt: string,
    description?: string | null,
    floor?: string | null,
    id: string,
    isAvailable?: boolean | null,
    parkingId: string,
    section?: string | null,
    spotNumber: string,
    spotType?: ParkingSpotSpotType | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteReservingSubscriptionVariables = {
  filter?: ModelSubscriptionReservingFilterInput | null,
};

export type OnDeleteReservingSubscription = {
  onDeleteReserving?:  {
    __typename: "Reserving",
    accessNo: string,
    buildingCode: string,
    createdAt: string,
    email?: string | null,
    endTime: string,
    id: string,
    phone?: string | null,
    reservedBy?: string | null,
    spotId: string,
    startTime: string,
    status?: ReservingStatus | null,
    updatedAt: string,
    vehicleCode?: string | null,
  } | null,
};

export type OnDeleteUnitInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUnitInfoFilterInput | null,
};

export type OnDeleteUnitInfoSubscription = {
  onDeleteUnitInfo?:  {
    __typename: "UnitInfo",
    accessNo: string,
    buildingCode: string,
    cognitoUsername?: string | null,
    createdAt: string,
    email?: string | null,
    firstName: string,
    id: string,
    lastName: string,
    phone?: string | null,
    sakenLastName?: string | null,
    sakenName?: string | null,
    unitNo: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnUpdateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnUpdateAdminSubscription = {
  onUpdateAdmin?:  {
    __typename: "Admin",
    address?: string | null,
    assignedParkingIds?: Array< string | null > | null,
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    cognitoUsername?: string | null,
    createdAt: string,
    email: string,
    id: string,
    managerCode: string,
    managerName: string,
    phoneNo?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateBuildingSubscriptionVariables = {
  filter?: ModelSubscriptionBuildingFilterInput | null,
};

export type OnUpdateBuildingSubscription = {
  onUpdateBuilding?:  {
    __typename: "Building",
    address: string,
    buildingCode: string,
    buildingName: string,
    buildingNo: string,
    createdAt: string,
    id: string,
    location?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateParkingSubscriptionVariables = {
  filter?: ModelSubscriptionParkingFilterInput | null,
};

export type OnUpdateParkingSubscription = {
  onUpdateParking?:  {
    __typename: "Parking",
    buildingCode: string,
    buildingName?: string | null,
    buildingNo?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    parkingLots?: number | null,
    parkingName?: string | null,
    parkingNo: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateParkingSpotSubscriptionVariables = {
  filter?: ModelSubscriptionParkingSpotFilterInput | null,
};

export type OnUpdateParkingSpotSubscription = {
  onUpdateParkingSpot?:  {
    __typename: "ParkingSpot",
    buildingCode: string,
    createdAt: string,
    description?: string | null,
    floor?: string | null,
    id: string,
    isAvailable?: boolean | null,
    parkingId: string,
    section?: string | null,
    spotNumber: string,
    spotType?: ParkingSpotSpotType | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateReservingSubscriptionVariables = {
  filter?: ModelSubscriptionReservingFilterInput | null,
};

export type OnUpdateReservingSubscription = {
  onUpdateReserving?:  {
    __typename: "Reserving",
    accessNo: string,
    buildingCode: string,
    createdAt: string,
    email?: string | null,
    endTime: string,
    id: string,
    phone?: string | null,
    reservedBy?: string | null,
    spotId: string,
    startTime: string,
    status?: ReservingStatus | null,
    updatedAt: string,
    vehicleCode?: string | null,
  } | null,
};

export type OnUpdateUnitInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUnitInfoFilterInput | null,
};

export type OnUpdateUnitInfoSubscription = {
  onUpdateUnitInfo?:  {
    __typename: "UnitInfo",
    accessNo: string,
    buildingCode: string,
    cognitoUsername?: string | null,
    createdAt: string,
    email?: string | null,
    firstName: string,
    id: string,
    lastName: string,
    phone?: string | null,
    sakenLastName?: string | null,
    sakenName?: string | null,
    unitNo: string,
    updatedAt: string,
    username: string,
  } | null,
};
