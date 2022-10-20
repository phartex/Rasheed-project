import { InjectionToken } from "@angular/core";

export interface AppConfig {
  vendingMeter: any;
  CHANNEL: string;
  MOBILE_PATTERN: string;
  EMAIL_PATTERN: string;
  TEXT_PATTERN: string;
  MAX_FILE_SIZE: number;
  BASE_URL : string;
  ACCOUNTCREATION: string;
  DATE_FORMAT: string;
  APP_TITLE: string;
  PURPOSE: string;
  ERROR_MESSAGE: Record<string, string>;

}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');