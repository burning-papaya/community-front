export interface Player {
  id: number
  name: string
  type: PlayerType
}

export enum PlayerType {
  DEFAULT = 'DEFAULT',
  ATTACKER = 'ATTACKER',
  DEFENDER = 'DEFENDER'
}
