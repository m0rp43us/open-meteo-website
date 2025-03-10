/// Generic helper functions

export function altitudeAboveSeaLevelMeters(pressureLevelHpA: number): string {
    let altitude = -1/2.25577 * 10e4 * (Math.pow(pressureLevelHpA/1013.25, 1/5.25588) - 1)
    if (altitude <= 500) {
        return `${Math.round(altitude/10)*10} m`
    }
    if (altitude <= 2000) {
        return `${Math.round(altitude/100)*100} m`
    }
    if (altitude <= 20000) {
        return `${Math.round(altitude/100)/10} km`
    }
    return `${Math.round(altitude/1000)} km`
}