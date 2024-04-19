export type CriticalityLevel = 'low' | 'medium' | 'high' | 'critical';

export class Criticality {
  private lvl: CriticalityLevel;
  constructor(lvl: CriticalityLevel) {
    this.lvl = lvl;
  }

  alarmSuffix() {
    return `-${this.lvl}-lvl`;
  }

  toString() {
    return this.lvl;
  }

  increase() {
    if (this.lvl == 'low') {
      return new Criticality('medium');
    }
    if (this.lvl == 'medium') {
      return new Criticality('high');
    }
    if (this.lvl == 'high') {
      return new Criticality('critical');
    }
    return this;
  }

  decrease() {
    if (this.lvl == 'critical') {
      return new Criticality('high');
    }
    if (this.lvl == 'high') {
      return new Criticality('medium');
    }
    if (this.lvl == 'medium') {
      return new Criticality('low');
    }
    return this;
  }
}