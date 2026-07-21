import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";



type EagerBuildingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Building, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly buildingName: string;
  readonly buildingNo: string;
  readonly address: string;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBuildingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Building, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly buildingName: string;
  readonly buildingNo: string;
  readonly address: string;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BuildingModel = LazyLoading extends LazyLoadingDisabled ? EagerBuildingModel : LazyBuildingModel

export declare const BuildingModel: (new (init: ModelInit<BuildingModel>) => BuildingModel) & {
  copyOf(source: BuildingModel, mutator: (draft: MutableModel<BuildingModel>) => MutableModel<BuildingModel> | void): BuildingModel;
}

type EagerAdminModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly managerCode: string;
  readonly managerName: string;
  readonly phoneNo?: string | null;
  readonly email: string;
  readonly buildingName?: string | null;
  readonly buildingNo?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly managerCode: string;
  readonly managerName: string;
  readonly phoneNo?: string | null;
  readonly email: string;
  readonly buildingName?: string | null;
  readonly buildingNo?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdminModel = LazyLoading extends LazyLoadingDisabled ? EagerAdminModel : LazyAdminModel

export declare const AdminModel: (new (init: ModelInit<AdminModel>) => AdminModel) & {
  copyOf(source: AdminModel, mutator: (draft: MutableModel<AdminModel>) => MutableModel<AdminModel> | void): AdminModel;
}

type EagerUnitInfoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UnitInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly unitNo: string;
  readonly accessNo: string;
  readonly sakenName: string;
  readonly sakenLastName?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUnitInfoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UnitInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly unitNo: string;
  readonly accessNo: string;
  readonly sakenName: string;
  readonly sakenLastName?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UnitInfoModel = LazyLoading extends LazyLoadingDisabled ? EagerUnitInfoModel : LazyUnitInfoModel

export declare const UnitInfoModel: (new (init: ModelInit<UnitInfoModel>) => UnitInfoModel) & {
  copyOf(source: UnitInfoModel, mutator: (draft: MutableModel<UnitInfoModel>) => MutableModel<UnitInfoModel> | void): UnitInfoModel;
}

type EagerParkingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly buildingName?: string | null;
  readonly buildingNo?: string | null;
  readonly parkingName?: string | null;
  readonly parkingNo: string;
  readonly parkingLots?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParkingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly buildingCode: string;
  readonly buildingName?: string | null;
  readonly buildingNo?: string | null;
  readonly parkingName?: string | null;
  readonly parkingNo: string;
  readonly parkingLots?: number | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ParkingModel = LazyLoading extends LazyLoadingDisabled ? EagerParkingModel : LazyParkingModel

export declare const ParkingModel: (new (init: ModelInit<ParkingModel>) => ParkingModel) & {
  copyOf(source: ParkingModel, mutator: (draft: MutableModel<ParkingModel>) => MutableModel<ParkingModel> | void): ParkingModel;
}

type EagerReservingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reserving, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dateTime: string;
  readonly parkingNo: string;
  readonly vehicleCode?: string | null;
  readonly accessNo: string;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly duration?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReservingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reserving, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dateTime: string;
  readonly parkingNo: string;
  readonly vehicleCode?: string | null;
  readonly accessNo: string;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly duration?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReservingModel = LazyLoading extends LazyLoadingDisabled ? EagerReservingModel : LazyReservingModel

export declare const ReservingModel: (new (init: ModelInit<ReservingModel>) => ReservingModel) & {
  copyOf(source: ReservingModel, mutator: (draft: MutableModel<ReservingModel>) => MutableModel<ReservingModel> | void): ReservingModel;
}

type EagerCreateAdminWithCognitoReturnTypeModel = {
  readonly success: boolean;
  readonly message: string;
  readonly adminId?: string | null;
  readonly cognitoUsername?: string | null;
  readonly temporaryPassword?: string | null;
}

type LazyCreateAdminWithCognitoReturnTypeModel = {
  readonly success: boolean;
  readonly message: string;
  readonly adminId?: string | null;
  readonly cognitoUsername?: string | null;
  readonly temporaryPassword?: string | null;
}

export declare type CreateAdminWithCognitoReturnTypeModel = LazyLoading extends LazyLoadingDisabled ? EagerCreateAdminWithCognitoReturnTypeModel : LazyCreateAdminWithCognitoReturnTypeModel

export declare const CreateAdminWithCognitoReturnTypeModel: (new (init: ModelInit<CreateAdminWithCognitoReturnTypeModel>) => CreateAdminWithCognitoReturnTypeModel)

const { Building, Admin, UnitInfo, Parking, Reserving, CreateAdminWithCognitoReturnType } = initSchema(schema) as {
  Building: PersistentModelConstructor<BuildingModel>;
  Admin: PersistentModelConstructor<AdminModel>;
  UnitInfo: PersistentModelConstructor<UnitInfoModel>;
  Parking: PersistentModelConstructor<ParkingModel>;
  Reserving: PersistentModelConstructor<ReservingModel>;
  CreateAdminWithCognitoReturnType: PersistentModelConstructor<CreateAdminWithCognitoReturnTypeModel>;
};

export {
  Building,
  Admin,
  UnitInfo,
  Parking,
  Reserving
};