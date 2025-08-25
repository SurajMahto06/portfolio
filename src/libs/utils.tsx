import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn (classNames)
 * Combines Tailwind classes with conflict resolution.
 *
 * Example:
 * cn("px-4 py-2", isActive && "bg-blue-500", "bg-gray-500")
 * // -> "px-4 py-2 bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}