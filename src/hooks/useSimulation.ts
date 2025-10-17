import { useContext } from 'react';
import { SimulationContext } from '@context/simulationContext';

export function useSimulation() {
  return useContext(SimulationContext);
}
