export class Character {
  constructor(player) {
    this.player = player;
  }
}

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if ( this.members.has( member ) ) {
      throw new Error(`member ${member} exist`);
    }
    else {
      this.members.add( member );
    }
  }

  addAll(...args) {
    args.forEach( ( el ) => {
      this.members.add( el );
    })
  }

  toArray() {
    return Array.from(this.members);
  }

}
