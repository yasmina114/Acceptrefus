import { Passager } from "./passager";

export interface Trajet {
    id: number;
    nom:string;
    depart: string;
    arrivee: string;
    date: Date;
    heureDepart:Date;
    places: number;
    passagers: Passager[];
  }
  