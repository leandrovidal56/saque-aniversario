import { useContext } from 'react';
import { SimulationContext } from '@context/SimulationContext';

export function useSimulation() {
  return useContext(SimulationContext);
}
