export type TodoId = number | string;

export type TodoItem = {
  id: TodoId;
  title: string;
  tags?: string[];
};