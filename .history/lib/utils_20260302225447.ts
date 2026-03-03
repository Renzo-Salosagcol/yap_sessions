import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formErrorMessage(error: string, id: string) {
  const rootElement = document.getElementById(id);
  if (rootElement) {
    const errorElement = rootElement.querySelector(".form-error-message");
    if (errorElement) {
      errorElement.textContent = error;
    }
  }
}
