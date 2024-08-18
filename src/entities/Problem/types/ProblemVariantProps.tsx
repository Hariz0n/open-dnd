import type { PropsWithChildren } from "react";

export type ProblemVariantProps = Pick<Problem.Variant, 'text'> & PropsWithChildren;