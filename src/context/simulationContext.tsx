import React, { createContext, useState, ReactNode } from 'react';
import { useFgtsCalculator } from '@hooks/useFgtsCalculator';
import { SimulationContextData, SimulationData } from './type';

export const SimulationContext = createContext<SimulationContextData>({
  simulation: undefined,
  saveSimulation: () => {},
  clearSimulation: () => {},
});

export function SimulationProvider({ children }: { children: ReactNode }) {
  const [simulation, setSimulation] = useState<SimulationData>();
  const { calcularSaque } = useFgtsCalculator();

  const formatNumberToBRL = (value: number): string =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  function saveSimulation({
    nome,
    telefone,
    saldoFgts,
    mesAniversario,
  }: {
    nome: string;
    telefone: string;
    saldoFgts: number;
    mesAniversario: string;
  }) {
    const saqueNumber = calcularSaque(saldoFgts);

    const data: SimulationData = {
      nome: nome.trim(),
      telefone: telefone.trim(),
      saldoFgtsNumber: saldoFgts,
      saldoFgtsFormatted: formatNumberToBRL(saldoFgts),
      mesAniversario,
      saqueNumber,
      saqueFormatted: formatNumberToBRL(saqueNumber),
    };
    setSimulation(data);
  }

  function clearSimulation() {
    setSimulation(undefined);
  }

  return (
    <SimulationContext.Provider
      value={{ simulation, saveSimulation, clearSimulation }}
    >
      {children}
    </SimulationContext.Provider>
  );
}
