import { ChangeEvent, FocusEvent } from "react";
export interface IInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  dataSelect?: string[];
  onChange?: (event: ChangeEvent<any>) => void;
  onBlur?: (event: FocusEvent<any>) => void;
  value?: string | number | string[];
}
