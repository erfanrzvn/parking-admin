/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAdmin = /* GraphQL */ `subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onCreateAdmin(filter: $filter) {
    address
    assignedParkingIds
    buildingCode
    buildingName
    buildingNo
    cognitoUsername
    createdAt
    email
    id
    managerCode
    managerName
    phoneNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAdminSubscriptionVariables,
  APITypes.OnCreateAdminSubscription
>;
export const onCreateBuilding = /* GraphQL */ `subscription OnCreateBuilding($filter: ModelSubscriptionBuildingFilterInput) {
  onCreateBuilding(filter: $filter) {
    address
    buildingCode
    buildingName
    buildingNo
    createdAt
    id
    location
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBuildingSubscriptionVariables,
  APITypes.OnCreateBuildingSubscription
>;
export const onCreateParking = /* GraphQL */ `subscription OnCreateParking($filter: ModelSubscriptionParkingFilterInput) {
  onCreateParking(filter: $filter) {
    buildingCode
    buildingName
    buildingNo
    createdAt
    description
    id
    parkingLots
    parkingName
    parkingNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateParkingSubscriptionVariables,
  APITypes.OnCreateParkingSubscription
>;
export const onCreateParkingSpot = /* GraphQL */ `subscription OnCreateParkingSpot(
  $filter: ModelSubscriptionParkingSpotFilterInput
) {
  onCreateParkingSpot(filter: $filter) {
    buildingCode
    createdAt
    description
    floor
    id
    isAvailable
    parkingId
    section
    spotNumber
    spotType
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateParkingSpotSubscriptionVariables,
  APITypes.OnCreateParkingSpotSubscription
>;
export const onCreateReserving = /* GraphQL */ `subscription OnCreateReserving($filter: ModelSubscriptionReservingFilterInput) {
  onCreateReserving(filter: $filter) {
    accessNo
    buildingCode
    createdAt
    email
    endTime
    id
    phone
    reservedBy
    spotId
    startTime
    status
    updatedAt
    vehicleCode
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReservingSubscriptionVariables,
  APITypes.OnCreateReservingSubscription
>;
export const onCreateUnitInfo = /* GraphQL */ `subscription OnCreateUnitInfo($filter: ModelSubscriptionUnitInfoFilterInput) {
  onCreateUnitInfo(filter: $filter) {
    accessNo
    buildingCode
    cognitoUsername
    createdAt
    email
    firstName
    id
    lastName
    phone
    sakenLastName
    sakenName
    unitNo
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUnitInfoSubscriptionVariables,
  APITypes.OnCreateUnitInfoSubscription
>;
export const onDeleteAdmin = /* GraphQL */ `subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onDeleteAdmin(filter: $filter) {
    address
    assignedParkingIds
    buildingCode
    buildingName
    buildingNo
    cognitoUsername
    createdAt
    email
    id
    managerCode
    managerName
    phoneNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAdminSubscriptionVariables,
  APITypes.OnDeleteAdminSubscription
>;
export const onDeleteBuilding = /* GraphQL */ `subscription OnDeleteBuilding($filter: ModelSubscriptionBuildingFilterInput) {
  onDeleteBuilding(filter: $filter) {
    address
    buildingCode
    buildingName
    buildingNo
    createdAt
    id
    location
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBuildingSubscriptionVariables,
  APITypes.OnDeleteBuildingSubscription
>;
export const onDeleteParking = /* GraphQL */ `subscription OnDeleteParking($filter: ModelSubscriptionParkingFilterInput) {
  onDeleteParking(filter: $filter) {
    buildingCode
    buildingName
    buildingNo
    createdAt
    description
    id
    parkingLots
    parkingName
    parkingNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteParkingSubscriptionVariables,
  APITypes.OnDeleteParkingSubscription
>;
export const onDeleteParkingSpot = /* GraphQL */ `subscription OnDeleteParkingSpot(
  $filter: ModelSubscriptionParkingSpotFilterInput
) {
  onDeleteParkingSpot(filter: $filter) {
    buildingCode
    createdAt
    description
    floor
    id
    isAvailable
    parkingId
    section
    spotNumber
    spotType
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteParkingSpotSubscriptionVariables,
  APITypes.OnDeleteParkingSpotSubscription
>;
export const onDeleteReserving = /* GraphQL */ `subscription OnDeleteReserving($filter: ModelSubscriptionReservingFilterInput) {
  onDeleteReserving(filter: $filter) {
    accessNo
    buildingCode
    createdAt
    email
    endTime
    id
    phone
    reservedBy
    spotId
    startTime
    status
    updatedAt
    vehicleCode
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReservingSubscriptionVariables,
  APITypes.OnDeleteReservingSubscription
>;
export const onDeleteUnitInfo = /* GraphQL */ `subscription OnDeleteUnitInfo($filter: ModelSubscriptionUnitInfoFilterInput) {
  onDeleteUnitInfo(filter: $filter) {
    accessNo
    buildingCode
    cognitoUsername
    createdAt
    email
    firstName
    id
    lastName
    phone
    sakenLastName
    sakenName
    unitNo
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUnitInfoSubscriptionVariables,
  APITypes.OnDeleteUnitInfoSubscription
>;
export const onUpdateAdmin = /* GraphQL */ `subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
  onUpdateAdmin(filter: $filter) {
    address
    assignedParkingIds
    buildingCode
    buildingName
    buildingNo
    cognitoUsername
    createdAt
    email
    id
    managerCode
    managerName
    phoneNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAdminSubscriptionVariables,
  APITypes.OnUpdateAdminSubscription
>;
export const onUpdateBuilding = /* GraphQL */ `subscription OnUpdateBuilding($filter: ModelSubscriptionBuildingFilterInput) {
  onUpdateBuilding(filter: $filter) {
    address
    buildingCode
    buildingName
    buildingNo
    createdAt
    id
    location
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBuildingSubscriptionVariables,
  APITypes.OnUpdateBuildingSubscription
>;
export const onUpdateParking = /* GraphQL */ `subscription OnUpdateParking($filter: ModelSubscriptionParkingFilterInput) {
  onUpdateParking(filter: $filter) {
    buildingCode
    buildingName
    buildingNo
    createdAt
    description
    id
    parkingLots
    parkingName
    parkingNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateParkingSubscriptionVariables,
  APITypes.OnUpdateParkingSubscription
>;
export const onUpdateParkingSpot = /* GraphQL */ `subscription OnUpdateParkingSpot(
  $filter: ModelSubscriptionParkingSpotFilterInput
) {
  onUpdateParkingSpot(filter: $filter) {
    buildingCode
    createdAt
    description
    floor
    id
    isAvailable
    parkingId
    section
    spotNumber
    spotType
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateParkingSpotSubscriptionVariables,
  APITypes.OnUpdateParkingSpotSubscription
>;
export const onUpdateReserving = /* GraphQL */ `subscription OnUpdateReserving($filter: ModelSubscriptionReservingFilterInput) {
  onUpdateReserving(filter: $filter) {
    accessNo
    buildingCode
    createdAt
    email
    endTime
    id
    phone
    reservedBy
    spotId
    startTime
    status
    updatedAt
    vehicleCode
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReservingSubscriptionVariables,
  APITypes.OnUpdateReservingSubscription
>;
export const onUpdateUnitInfo = /* GraphQL */ `subscription OnUpdateUnitInfo($filter: ModelSubscriptionUnitInfoFilterInput) {
  onUpdateUnitInfo(filter: $filter) {
    accessNo
    buildingCode
    cognitoUsername
    createdAt
    email
    firstName
    id
    lastName
    phone
    sakenLastName
    sakenName
    unitNo
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUnitInfoSubscriptionVariables,
  APITypes.OnUpdateUnitInfoSubscription
>;
