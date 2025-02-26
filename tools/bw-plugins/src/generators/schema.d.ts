export type BwLibType = 'feature'|'data-access'|'ui'|'core';
export interface BwLibGeneratorSchema {
  name: string;
  domain: string;
  type: BwLibType;
}
