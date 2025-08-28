// Tipos para la aplicación de Saint Seiya

export interface Saint {
  nombre: string;
  signo: string;
  cloth: ClothType;
  constelacion: string;
  fechaNacimiento: string;
  origen: string;
  alturaCm?: number;
  pesoKg?: number;
  tipoSangre?: TipoSangre;
  tecnicas?: string[];
  datoRelevante: string;
}

export type ClothType = 'Oro' | 'Plata' | 'Bronce';

export type TipoSangre = 'A' | 'B' | 'O' | 'AB';

export interface RequestParams {
  id: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  message: string;
}
