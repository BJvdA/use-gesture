import { PointerType } from '../types';
import { Vector2 } from '../types';
export declare function toHandlerProp(device: string, action?: string, capture?: boolean): string;
export declare function parseProp(prop: string): {
    device: string;
    capture: boolean;
    passive: boolean;
};
export declare function toDomEventType(device: string, action?: string): string;
export declare function isTouch(event: UIEvent): boolean;
export declare function getPointerType(event: UIEvent): PointerType;
export declare function distanceAngle(P1: Touch | PointerEvent, P2: Touch | PointerEvent): {
    angle: number;
    distance: number;
    origin: Vector2;
} | null;
export declare function touchIds(event: TouchEvent): number[];
export declare function touchDistanceAngle(event: TouchEvent, ids: number[]): {
    angle: number;
    distance: number;
    origin: Vector2;
} | null;
export declare function pointerId(event: PointerEvent | TouchEvent): number;
export declare function pointerValues(event: PointerEvent | TouchEvent): Vector2;
export declare function wheelValues(event: WheelEvent): Vector2;
export declare function scrollValues(event: UIEvent): Vector2;
export declare function getEventDetails(event: any): any;
