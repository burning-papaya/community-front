class Objective {
  id: number
  name: string
  description: string
  type: ObjectiveType

  constructor (id: number, name: string, description: string, type: ObjectiveType) {
    this.id = id
    this.name = name
    this.description = description
    this.type = type
  }
}

enum ObjectiveType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}

export class PrimaryObjective extends Objective {
  public maxPoints: number = 45

  constructor (id: number, name: string, description: string, maxPoints?: number) {
    super(id, name, description, ObjectiveType.PRIMARY)

    if (maxPoints) { this.maxPoints = maxPoints }
  }

  validatePoints (points: number): boolean {
    return points <= this.maxPoints
  }
}

export enum ScoringType {
  PROGRESSIVE,
  END_GAME
}

export class SecondaryObjective extends Objective {
  public scoringType: ScoringType

  constructor (id: number, name: string, description: string, scoringType: ScoringType) {
    super(id, name, description, ObjectiveType.SECONDARY)
    this.scoringType = scoringType
  }

  validatePoints (points: number): boolean {
    return points <= 0
  }
}
