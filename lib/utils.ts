import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateUUID = (): string => {
  const uuidWithDashes = uuidv4();
  const uuidWithoutDashes = uuidWithDashes.replace(/-/g, "");
  const shortUUID = uuidWithoutDashes.substr(0, 32);
  return shortUUID;
};
export const sanitizeInput = (input: string) => {
  const sanitizedInput = input.replace(/<[^>]*>/g, "");
  return sanitizedInput;
};

export const getScientificValue = (value: any) => {
  let num = parseFloat(value);
  if (Math.abs(num) < 1e-5) {
    return 0;
  }
  if (num >= 0.000001 && num < 1) {
    return num.toFixed(0);
  } else if (num < 0.000001 && num > 0) {
    return num.toExponential(2);
  } else if (num >= 1 && num < 1000) {
    return num.toFixed(0);
  } else if (num > 1000) {
    if (num / 1000 < 1000) {
      return `${parseInt(`${num / 1000}`)}K`;
    } else if (num / 1000000 < 1000) {
      return `${Number(num / 1000000).toFixed(1)}M`;
    } else {
      return `>1B`;
    }
  }
  return value;
};

export const convertUnixTimestampToAge = (timestamp: any) => {
  const age = Number(new Date()) - Number(new Date(timestamp * 1000));
  const days = Math.floor(age / (1000 * 60 * 60 * 24));
  const hours = Math.floor((age % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((age % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((age % (1000 * 60)) / 1000);
  if (days) {
    return `${days}d`;
  } else if (hours) {
    return `${hours}hr`;
  } else if (minutes) {
    return `${minutes}m`;
  } else if (seconds) {
    return `${seconds}s`;
  } else {
    age;
  }
};

export const convertTimestampToAge = (seconds: any, steps: number = 1) => {
  const timeSeconds: [string, number][] = [
    ["d", 86400],
    ["hr", 3600],
    ["m", 60],
  ];
  const age = [];
  let tempSeconds = seconds;

  timeSeconds.map((tSeconds: any[]) => {
    if (tempSeconds > tSeconds[1]) {
      age.push(Math.floor(tempSeconds / tSeconds[1]) + tSeconds[0]);
      tempSeconds = tempSeconds % tSeconds[1];
    }
  });

  if (tempSeconds > 0) {
    age.push(Math.floor(tempSeconds % 60) + "s");
    tempSeconds = 0;
  }
  return age.slice(0, steps).join();
};
