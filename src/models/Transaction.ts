export enum TransactionStatus {
  ALL = 'ALL',
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

export type TransactionInterface = {
  id: number;
  titulo: string;
  tipo: TransactionStatus;
  idCategoria: number;
  valor: number;
  created_date: Date;
};

export class Transaction implements TransactionInterface {
  public id: number;
  public titulo: string;
  public tipo: TransactionStatus;
  public idCategoria: number;
  public valor: number;
  public created_date: Date;
  
  constructor(
    id: number,
    titulo: string,
    tipo: TransactionStatus,
    idCategoria: number,
    valor: number
  ) {
    this.id = id;
    this.titulo = titulo;
    this.tipo = tipo;
    this.idCategoria = idCategoria;
    this.valor = valor;
    this.created_date = new Date();
  }

  getValor() {
    if (this.tipo === TransactionStatus.INPUT) {
      return this.valor;
    }
    return -this.valor;
  }

  getValorFormat() {
    if (this.tipo === TransactionStatus.INPUT) {
      return `R$ ${this.valor.toFixed(2).replace(".", ",")}`;
    }
    return `R$ - ${this.valor.toFixed(2).replace(".", ",")}`;
  }

  getDateCreatedFormat() {
    return this.created_date.toLocaleDateString("pt-BR");
  }

  getTipoFormat() {
    if (this.tipo === TransactionStatus.INPUT) {
      return "Entrada";
    }
    return "Saída";
  }
}
