export declare const wheelConfigResolver: {
    axis(this: import("../types").InternalCoordinatesOptions, _v: any, _k: string, { axis }: import("../types").CoordinatesConfig): "x" | "y" | undefined;
    axisThreshold(value?: number): number;
    bounds(value?: import("../types").DragBounds | ((state: import("../types").State) => import("../types").DragBounds)): HTMLElement | [import("../types").Vector2, import("../types").Vector2] | (() => EventTarget | null);
    enabled(value?: boolean): boolean;
    eventOptions(value: AddEventListenerOptions | undefined, _k: string, config: {
        shared: import("../types").GenericOptions;
    }): {
        once?: boolean | undefined;
        passive?: boolean | undefined;
        signal?: AbortSignal | undefined;
        capture?: boolean | undefined;
    };
    preventDefault(value?: boolean): boolean;
    triggerAllEvents(value?: boolean): boolean;
    rubberband(value?: number | boolean | import("../types").Vector2): import("../types").Vector2;
    from(value: number | import("../types").Vector2 | ((s: import("../types").State) => import("../types").Vector2)): [number, number] | ((s: import("../types").State) => import("../types").Vector2) | undefined;
    transform(this: import("../types").InternalGestureOptions, value: any, _k: string, config: {
        shared: import("../types").GenericOptions;
    }): any;
    threshold(value: any): [any, any];
};
