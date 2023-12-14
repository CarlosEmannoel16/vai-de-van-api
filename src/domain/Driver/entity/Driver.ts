export type TravelsActives = {
  name: string;
  id: string;
};

export class Driver {
  private id: string;
  private name: string;
  private travelsActives: TravelsActives[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.validate();
  }

  validate() {
    const errors = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get Id(): string {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }
}
