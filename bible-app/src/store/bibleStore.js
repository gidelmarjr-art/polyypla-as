import { create } from 'zustand';

import NVI from "../data/NVI.json";
import NAA from "../data/NAA.json";
import ARA from "../data/ARA.json";
import ARC from "../data/ARC.json";
// 1. Importe as novas versões que você colocou na pasta data
import AA from "../data/aa.json";
import ACF from "../data/acf.json";

export const useBibleStore = create((set) => ({
  ara: ARA,
  nvi: NVI,
  naa: NAA,
  arc: ARC,
  aa: AA,   // 2. Adicione a versão AA
  acf: ACF, // 3. Adicione a versão ACF
  loadBibles: () => {
    console.log("Bíblias carregadas com sucesso!");
  },
}));