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

export interface ILatestAPiPrams{
  symbols :string,
  base :string
}

export interface ILatestRes {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}
interface Rates {
  [key:string]: number;
  
}

export interface ISelectedValue{
  name:string,
  amount:number
  code:string
}

export interface IStaticTableConfigs{
  sourceCurrencyName:string;
  targetCurrencyName:string;
  conversions:IConversion[]
}

export interface IConversion{
  from:number,
  to:number
}

export interface IHistoricalResponse{
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: { [key: string]: number };
}