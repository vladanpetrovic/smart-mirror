import {ApiCoreState} from "neatlicity-api-client-core";
import {DeviceState} from "../device/api-client/api-device.models";

export interface AppApiState extends ApiCoreState {
    device: DeviceState;
}