export type TodoType = {
  id: string;
  title?: string | null;
  color?: string | null; // borrar color
  isCompleted: boolean;
  createdAt?: Date;
  mensaje?: string | null;
  pinColor?: string | null;
  onDelete?: () => void;
};
