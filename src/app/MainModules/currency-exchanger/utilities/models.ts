export interface ICurrency {
  name: string;
  code: string;
}

export interface ISymbols {
  success: boolean;
  symbols: ISymbol;
}
interface ISymbol {
  [key: string]: string;
}
export interface IConvertRequestPrams {
  from: string;
  to: string;
  amount: number;
}

export interface IConvertResponse {
  success: boolean;
  query: IQuery;
  info: Info;
  historical: string;
  date: string;
  result: number;
}
interface Info {
  timestamp: number;
  rate: number;
}
interface IQuery {
  from: string;
  to: string;
  amount: number;
}
