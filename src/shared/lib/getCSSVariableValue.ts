export const getCSSVariableValue = (name: string): string =>
    getComputedStyle(document.documentElement).getPropertyValue(name);
