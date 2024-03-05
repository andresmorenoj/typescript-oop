export interface IDriver {
  database: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

class PostgresDriver implements IDriver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    // code
    return true
  }
}
