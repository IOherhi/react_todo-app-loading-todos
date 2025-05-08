import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 0;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const postTodos = (id: number, data: string) => {
  return client.post<Todo[]>(`/todos?userId=${id}`, data);
};

export const potchTodos = (id: number, data: string) => {
  return client.patch<Todo[]>(`/todos?userId=${id}`, data);
};

export const deleteTodos = (id: number) => {
  return client.delete(`/todos?userId=${id}`);
};
