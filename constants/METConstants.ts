export const joggingMET = 9.8;
export const cyclingMET = 9.0;
export const swimmingMET = 7.0;
export const walkingMET = 3.8;
export const yogaMET = 2.5;

export function calorieBurned(MET: number, weight: number) {
    return MET * weight
}
