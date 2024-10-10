type A = {
    paramA1: string;
    paramA2: number;
    param3: {
        subparam1: string;
        subparam2: string;
    }
}

type B = {
    paramB1: string;
    paramB2: number;
    param3: {
        subparam1: string;
        subparam2: string;
    }
}

type C = {
    paramC1: string;
    paramC2: number;
    param3: {
        subparam1: string;
        subparam2: string;
    }
}

type UnitType = A | B | C

type T<Type> = {
    a: Type;
    b: string;
}

let aaa: T<C> = {
    a: {
        paramC1: "string",
        paramC2: 13,
        param3: {
            subparam1: "string",
            subparam2: "string",
        }
    },
    b: "dfg"
}

///
import { ActionCreatorsMapObject } from "redux";

interface Action<T extends string> {
    type: T
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P
}

function createAction<T extends string>(type: T): Action<T>
function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
function createAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
type GetActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>










//////We can make the mapper more versatile by passing the value of the key as parameter as well:
type IThemes = {
    default: { };
    oriental: { };
    viking: { };
    spring: { };
    santa: { };
};

type TAction<Actors, Value> = {
    [Property in keyof Actors]: Value;
};

type TThemeAction = TAction<IThemes, { start: string; end: string }>; // Produces the same `TThemeAction` mapped type