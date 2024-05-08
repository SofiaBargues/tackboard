export type TodoType = {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
  mensaje?: string | null;
  pinColor?: string | null;
  onDelete?: () => void;
};
