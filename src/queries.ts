/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAdmin = /* GraphQL */ `query GetAdmin($id: ID!) {
  getAdmin(id: $id) {
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
` as GeneratedQuery<APITypes.GetAdminQueryVariables, APITypes.GetAdminQuery>;
export const getBuilding = /* GraphQL */ `query GetBuilding($id: ID!) {
  getBuilding(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBuildingQueryVariables,
  APITypes.GetBuildingQuery
>;
export const getParking = /* GraphQL */ `query GetParking($id: ID!) {
  getParking(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetParkingQueryVariables,
  APITypes.GetParkingQuery
>;
export const getParkingSpot = /* GraphQL */ `query GetParkingSpot($id: ID!) {
  getParkingSpot(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetParkingSpotQueryVariables,
  APITypes.GetParkingSpotQuery
>;
export const getReserving = /* GraphQL */ `query GetReserving($id: ID!) {
  getReserving(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReservingQueryVariables,
  APITypes.GetReservingQuery
>;
export const getUnitInfo = /* GraphQL */ `query GetUnitInfo($id: ID!) {
  getUnitInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUnitInfoQueryVariables,
  APITypes.GetUnitInfoQuery
>;
export const listAdmins = /* GraphQL */ `query ListAdmins(
  $filter: ModelAdminFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdminsQueryVariables,
  APITypes.ListAdminsQuery
>;
export const listBuildings = /* GraphQL */ `query ListBuildings(
  $filter: ModelBuildingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuildings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuildingsQueryVariables,
  APITypes.ListBuildingsQuery
>;
export const listCognitoUsers = /* GraphQL */ `query ListCognitoUsers($filter: String, $limit: Int, $nextToken: String) {
  listCognitoUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      accessNo
      buildingCode
      createdAt
      email
      groups
      id
      isActive
      managerCode
      name
      phone
      unitNo
      updatedAt
      userRole
      userStatus
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCognitoUsersQueryVariables,
  APITypes.ListCognitoUsersQuery
>;
export const listParkingSpots = /* GraphQL */ `query ListParkingSpots(
  $filter: ModelParkingSpotFilterInput
  $limit: Int
  $nextToken: String
) {
  listParkingSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParkingSpotsQueryVariables,
  APITypes.ListParkingSpotsQuery
>;
export const listParkings = /* GraphQL */ `query ListParkings(
  $filter: ModelParkingFilterInput
  $limit: Int
  $nextToken: String
) {
  listParkings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParkingsQueryVariables,
  APITypes.ListParkingsQuery
>;
export const listReservings = /* GraphQL */ `query ListReservings(
  $filter: ModelReservingFilterInput
  $limit: Int
  $nextToken: String
) {
  listReservings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReservingsQueryVariables,
  APITypes.ListReservingsQuery
>;
export const listUnitInfos = /* GraphQL */ `query ListUnitInfos(
  $filter: ModelUnitInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listUnitInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUnitInfosQueryVariables,
  APITypes.ListUnitInfosQuery
>;
