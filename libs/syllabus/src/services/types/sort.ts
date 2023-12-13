export type SortParam<T> = {
  field: keyof T;
  ascending: boolean;
};
