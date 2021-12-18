import { ValueObject } from "../../ValueObjects/ValueObjetcts";

interface IDProps {
  value: string;
}

export class ID extends ValueObject<IDProps> {
  public constructor(props: IDProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(value: string): ID {
    return new ID({ value: value });
  }

}