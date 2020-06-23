export enum Type {
    Normal = 'normal',
    Fighting = 'fighting',
    Flying = 'flying',
    Poison = 'poison',
    Ground = 'ground',
    Rock = 'rock',
    Bug = 'bug',
    Ghost = 'ghost',
    Steel = 'steel',
    Fire = 'fire',
    Water = 'water',
    Grass = 'grass',
    Electric = 'electric',
    Psychic = 'psychic',
    Ice = 'ice',
    Dragon = 'dragon',
    Dark = 'dark',
    Fairy = 'fairy',
    Unknown = 'unknown',
    Shadow = 'shadow',
}

export type PokeType = {
    name: Type;
}

export enum Stat {
    Hp = 'hp',
    Attack = 'attack',
    Defense = 'defense',
    SpecialAttack = 'special-attack',
    SpecialDefense = 'special-defense',
    Speed = 'speed'
}

export type PokeStat = {
    name: Stat,
    value: number | string
}

export type PokeStats = {
    [key in Stat]: PokeStat
}

export type Pokemon = {
    name: string,
    image: string,
    types: PokeType[],
    stats: PokeStats,
}
