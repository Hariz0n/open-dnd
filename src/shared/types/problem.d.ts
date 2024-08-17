export declare global {
  interface Window {
    problem: Problem.Config;
  }
}

export namespace Problem {
  export interface Config {
    title: string;
    description: string;
  }
}