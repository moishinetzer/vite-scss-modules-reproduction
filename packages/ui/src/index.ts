import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { Button } from "./button";

const cn = (...inputs: Parameters<typeof cx>) => twMerge(cx(inputs));

export { cn, Button };
