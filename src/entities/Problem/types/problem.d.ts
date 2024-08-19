import type { Size } from "@/shared";

declare global {
  namespace Problem {
    export interface Config {
      title: string;
      description: string;
      dropzone: Dropzone;
      variants: Variant[];
    }

    export interface Dropzone {
      imageSrc: string;
      areas: Area[];
    }

    export interface Area {
      id: string;
      x: Size;
      y: Size;
      height: Size;
      width: Size;
    }

    export interface Variant {
      id: string;
      chipChar: string;
      chipTitle: string;
      text: string;
    }

    export interface Answer {
      [key: string]: Pick<Problem.Variant, 'id' | 'chipChar'> | null;
    }
  }

  interface Window {
    problem: Problem.Config;
    getState: () => string;
    setState: (json: string) => void;
  }
}
