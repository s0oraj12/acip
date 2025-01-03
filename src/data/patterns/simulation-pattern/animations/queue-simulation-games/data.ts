import { Animation } from '@/types';
import { Users, ArrowLeftRight, Circle, RotateCcw, List } from 'lucide-react';

export const patterns = {
  simpleQueue: {
    data: [3, 2, 4, 1, 5],
    target: 3,
    icon: 'users',
    title: "Ticket Queue",
    desc: "Simple Processing",
    color: "#4F46E5"
  },
  matchingQueue: {
    queue: [1, 1, 0, 0, 1],
    stack: [1, 0, 0, 1, 1],
    icon: 'arrowLeftRight',
    title: "Matching Game",
    desc: "Queue vs Stack",
    color: "#7C3AED"
  },
  circularQueue: {
    players: ['A', 'B', 'C', 'D', 'E'],
    k: 2,
    icon: 'circle',
    title: "Circular Game",
    desc: "Josephus Problem",
    color: "#2563EB"
  }
};

const createDefaultPhase = (index: number): any => ({
  description: index === 0 ? "Initialize queue" : `Process person ${index + 1}`,
  activeIndex: index,
  highlightIndices: [index],
  counter: {
    queue: [],
    processed: 0,
    current: 0
  },
  code: index === 0 ? "const queue = [];" : "processTickets(0);"
});

export const queueSimulationAnimation: Animation = {
  id: "queue-simulation",
  title: "Queue Simulation Games",
  description: "Visualizing different queue-based game mechanics",
  steps: [
    {
      title: "Simple Queue Processing",
      description: "Process a queue of people buying tickets",
      array: patterns.simpleQueue.data,
      phases: patterns.simpleQueue.data.map((tickets, index) => ({
        description: index === 0 
          ? "Initialize queue" 
          : `Process person ${index + 1} (wants ${tickets} tickets)`,
        activeIndex: index,
        highlightIndices: [index],
        counter: {
          queue: patterns.simpleQueue.data.slice(index),
          processed: patterns.simpleQueue.data.slice(0, index).reduce((acc, curr) => acc + curr, 0),
          current: tickets
        },
        code: index === 0 
          ? "const queue = [...tickets];" 
          : `processTickets(${tickets});`
      }))
    }
  ],
  counters: []
};

// Ensure queueSimulationAnimation.steps is always an array with at least one valid step
if (!Array.isArray(queueSimulationAnimation.steps) || queueSimulationAnimation.steps.length === 0) {
  queueSimulationAnimation.steps = [{
    title: "Default Step",
    description: "No valid steps found",
    array: [],
    phases: [createDefaultPhase(0)]
  }];
} else {
  // Ensure each step has a valid phases array
  queueSimulationAnimation.steps = queueSimulationAnimation.steps.map(step => {
    if (!Array.isArray(step.phases) || step.phases.length === 0) {
      return {
        ...step,
        phases: [createDefaultPhase(0)]
      };
    }
    return step;
  });
}

export default queueSimulationAnimation;

