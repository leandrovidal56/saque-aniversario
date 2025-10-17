export type SimulationData = {
  nome: string;
  telefone: string;
  saldoFgtsNumber: number;
  saldoFgtsFormatted: string;
  mesAniversario: string;
  saqueNumber: number;
  saqueFormatted: string;
};

export type SimulationContextData = {
  simulation?: SimulationData;
  saveSimulation: (payload: {
    nome: string;
    telefone: string;
    saldoFgts: number;
    mesAniversario: string;
  }) => void;
  clearSimulation: () => void;
};
