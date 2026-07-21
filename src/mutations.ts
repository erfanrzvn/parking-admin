/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAdmin = /* GraphQL */ `mutation CreateAdmin(
  $condition: ModelAdminConditionInput
  $input: CreateAdminInput!
) {
  createAdmin(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAdminMutationVariables,
  APITypes.CreateAdminMutation
>;
export const createAdminWithCognito = /* GraphQL */ `mutation CreateAdminWithCognito(
  $address: String
  $buildingCode: String!
  $buildingName: String
  $buildingNo: String
  $email: AWSEmail!
  $managerCode: String!
  $managerName: String!
  $phoneNo: String
) {
  createAdminWithCognito(
    address: $address
    buildingCode: $buildingCode
    buildingName: $buildingName
    buildingNo: $buildingNo
    email: $email
    managerCode: $managerCode
    managerName: $managerName
    phoneNo: $phoneNo
  ) {
    adminId
    cognitoUsername
    message
    success
    temporaryPassword
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAdminWithCognitoMutationVariables,
  APITypes.CreateAdminWithCognitoMutation
>;
export const createBuilding = /* GraphQL */ `mutation CreateBuilding(
  $condition: ModelBuildingConditionInput
  $input: CreateBuildingInput!
) {
  createBuilding(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateBuildingMutationVariables,
  APITypes.CreateBuildingMutation
>;
export const createParking = /* GraphQL */ `mutation CreateParking(
  $condition: ModelParkingConditionInput
  $input: CreateParkingInput!
) {
  createParking(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateParkingMutationVariables,
  APITypes.CreateParkingMutation
>;
export const createParkingSpot = /* GraphQL */ `mutation CreateParkingSpot(
  $condition: ModelParkingSpotConditionInput
  $input: CreateParkingSpotInput!
) {
  createParkingSpot(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateParkingSpotMutationVariables,
  APITypes.CreateParkingSpotMutation
>;
export const createReserving = /* GraphQL */ `mutation CreateReserving(
  $condition: ModelReservingConditionInput
  $input: CreateReservingInput!
) {
  createReserving(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateReservingMutationVariables,
  APITypes.CreateReservingMutation
>;
export const createUnitInfo = /* GraphQL */ `mutation CreateUnitInfo(
  $condition: ModelUnitInfoConditionInput
  $input: CreateUnitInfoInput!
) {
  createUnitInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUnitInfoMutationVariables,
  APITypes.CreateUnitInfoMutation
>;
export const deleteAdmin = /* GraphQL */ `mutation DeleteAdmin(
  $condition: ModelAdminConditionInput
  $input: DeleteAdminInput!
) {
  deleteAdmin(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAdminMutationVariables,
  APITypes.DeleteAdminMutation
>;
export const deleteAdminFromCognito = /* GraphQL */ `mutation DeleteAdminFromCognito($username: String!) {
  deleteAdminFromCognito(username: $username) {
    message
    success
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAdminFromCognitoMutationVariables,
  APITypes.DeleteAdminFromCognitoMutation
>;
export const deleteBuilding = /* GraphQL */ `mutation DeleteBuilding(
  $condition: ModelBuildingConditionInput
  $input: DeleteBuildingInput!
) {
  deleteBuilding(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteBuildingMutationVariables,
  APITypes.DeleteBuildingMutation
>;
export const deleteParking = /* GraphQL */ `mutation DeleteParking(
  $condition: ModelParkingConditionInput
  $input: DeleteParkingInput!
) {
  deleteParking(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteParkingMutationVariables,
  APITypes.DeleteParkingMutation
>;
export const deleteParkingSpot = /* GraphQL */ `mutation DeleteParkingSpot(
  $condition: ModelParkingSpotConditionInput
  $input: DeleteParkingSpotInput!
) {
  deleteParkingSpot(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteParkingSpotMutationVariables,
  APITypes.DeleteParkingSpotMutation
>;
export const deleteReserving = /* GraphQL */ `mutation DeleteReserving(
  $condition: ModelReservingConditionInput
  $input: DeleteReservingInput!
) {
  deleteReserving(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteReservingMutationVariables,
  APITypes.DeleteReservingMutation
>;
export const deleteUnitInfo = /* GraphQL */ `mutation DeleteUnitInfo(
  $condition: ModelUnitInfoConditionInput
  $input: DeleteUnitInfoInput!
) {
  deleteUnitInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUnitInfoMutationVariables,
  APITypes.DeleteUnitInfoMutation
>;
export const suspendAdminInCognito = /* GraphQL */ `mutation SuspendAdminInCognito($suspend: Boolean!, $username: String!) {
  suspendAdminInCognito(suspend: $suspend, username: $username) {
    message
    success
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SuspendAdminInCognitoMutationVariables,
  APITypes.SuspendAdminInCognitoMutation
>;
export const updateAdmin = /* GraphQL */ `mutation UpdateAdmin(
  $condition: ModelAdminConditionInput
  $input: UpdateAdminInput!
) {
  updateAdmin(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAdminMutationVariables,
  APITypes.UpdateAdminMutation
>;
export const updateBuilding = /* GraphQL */ `mutation UpdateBuilding(
  $condition: ModelBuildingConditionInput
  $input: UpdateBuildingInput!
) {
  updateBuilding(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateBuildingMutationVariables,
  APITypes.UpdateBuildingMutation
>;
export const updateParking = /* GraphQL */ `mutation UpdateParking(
  $condition: ModelParkingConditionInput
  $input: UpdateParkingInput!
) {
  updateParking(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateParkingMutationVariables,
  APITypes.UpdateParkingMutation
>;
export const updateParkingSpot = /* GraphQL */ `mutation UpdateParkingSpot(
  $condition: ModelParkingSpotConditionInput
  $input: UpdateParkingSpotInput!
) {
  updateParkingSpot(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateParkingSpotMutationVariables,
  APITypes.UpdateParkingSpotMutation
>;
export const updateReserving = /* GraphQL */ `mutation UpdateReserving(
  $condition: ModelReservingConditionInput
  $input: UpdateReservingInput!
) {
  updateReserving(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateReservingMutationVariables,
  APITypes.UpdateReservingMutation
>;
export const updateUnitInfo = /* GraphQL */ `mutation UpdateUnitInfo(
  $condition: ModelUnitInfoConditionInput
  $input: UpdateUnitInfoInput!
) {
  updateUnitInfo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUnitInfoMutationVariables,
  APITypes.UpdateUnitInfoMutation
>;
