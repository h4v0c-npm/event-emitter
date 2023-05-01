export class EventEmitter {
    private listeners: any;
    private onAnyListeners: Array<Function>;

    constructor() {
        this.listeners = {};
        this.onAnyListeners = [];
    }

    on(events: Array<string> | string, callback: Function): EventEmitter {
        if (!Array.isArray(events)) {
            events = [events];
        }

        events.forEach((event: string) => {
            if (!(event in this.listeners)) {
                this.listeners[event] = [callback];
            } else {
                this.listeners[event].push(callback);
            }
        });

        return this;
    }

    onAny(callback: Function): EventEmitter {
        this.onAnyListeners.push(callback);

        return this;
    }

    emit(event: string, ...args: any): EventEmitter {
        this.listeners[event]?.forEach((callback: Function) => callback.apply(null, args));
        this.onAnyListeners?.forEach((callback: Function) => callback.apply(null, [event, ...args]));

        return this;
    }
}

let _instance;

export function GetGlobalEventEmitter() {
    if (!_instance) {
        _instance = new EventEmitter();
    }

    return (_instance);
}
