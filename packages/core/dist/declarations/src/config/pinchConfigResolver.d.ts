import { ModifierKey } from '../types';
import { PinchConfig, GenericOptions, InternalPinchOptions, State, Vector2 } from '../types';
export declare const pinchConfigResolver: {
    device(this: InternalPinchOptions, _v: any, _k: string, { shared, pointer: { touch } }: {
        shared: GenericOptions;
    } & GenericOptions & {
        enabled?: boolean | undefined;
        eventOptions?: AddEventListenerOptions | undefined;
        from?: Vector2 | ((state: import("../types").PinchState & {
            event: PointerEvent | TouchEvent | WheelEvent | import("../types").WebKitGestureEvent;
        }) => Vector2) | undefined;
        threshold?: number | Vector2 | undefined;
        preventDefault?: boolean | undefined;
        triggerAllEvents?: boolean | undefined;
        rubberband?: number | boolean | Vector2 | undefined;
        transform?: ((v: Vector2) => Vector2) | undefined;
    } & {
        pointer?: {
            touch?: boolean | undefined;
        } | undefined;
        scaleBounds?: import("../types").PinchBounds | ((state: (import("../types").PinchState & {
            event: PointerEvent | TouchEvent | WheelEvent | import("../types").WebKitGestureEvent;
        }) | undefined) => import("../types").PinchBounds) | undefined;
        angleBounds?: import("../types").PinchBounds | ((state: (import("../types").PinchState & {
            event: PointerEvent | TouchEvent | WheelEvent | import("../types").WebKitGestureEvent;
        }) | undefined) => import("../types").PinchBounds) | undefined;
        axis?: "lock" | undefined;
        modifierKey?: ModifierKey | NonNullable<ModifierKey>[] | undefined;
        pinchOnWheel?: boolean | undefined;
    }): "touch" | "pointer" | "gesture" | undefined;
    bounds(_v: any, _k: string, { scaleBounds, angleBounds }: PinchConfig): number[][] | ((state: State) => number[][]);
    threshold(this: InternalPinchOptions, value: number | Vector2, _k: string, config: PinchConfig): [number, number];
    modifierKey(value: ModifierKey | ModifierKey[]): ModifierKey | ModifierKey[];
    pinchOnWheel(value?: boolean): boolean;
    enabled(value?: boolean): boolean;
    eventOptions(value: AddEventListenerOptions | undefined, _k: string, config: {
        shared: GenericOptions;
    }): {
        once?: boolean | undefined;
        passive?: boolean | undefined;
        signal?: AbortSignal | undefined;
        capture?: boolean | undefined;
    };
    preventDefault(value?: boolean): boolean;
    triggerAllEvents(value?: boolean): boolean;
    rubberband(value?: number | boolean | Vector2): Vector2;
    from(value: number | Vector2 | ((s: State) => Vector2)): [number, number] | ((s: State) => Vector2) | undefined;
    transform(this: import("../types").InternalGestureOptions, value: any, _k: string, config: {
        shared: GenericOptions;
    }): any;
};
