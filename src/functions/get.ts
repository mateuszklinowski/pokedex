export function get<O>(key: keyof O) {
    return (obj: O) => obj[key]
}