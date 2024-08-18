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
      areas?: Area[];
    }

    export interface Area {
      x: Size;
      y: Size;
      height: Size;
      width: Size;
    }

    export interface Variant {
      chipChar: string;
      chipTitle: string;
      text: string;
    }
  }

  interface Window {
    problem: Problem.Config;
  }
}
