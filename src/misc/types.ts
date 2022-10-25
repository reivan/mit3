export type TTodoId = number | string;

export type TTodoItem = {
  id: TTodoId;
  title: string;
  tags?: string[];
};