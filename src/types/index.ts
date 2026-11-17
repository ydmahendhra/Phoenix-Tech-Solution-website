export type DivisionId = 'software' | 'hardware' | 'creative';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface Division {
  id: DivisionId;
  name: string;
  tagline: string;
  badge: string;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  iconName: string;
  description: string;
  services: ServiceItem[];
}
