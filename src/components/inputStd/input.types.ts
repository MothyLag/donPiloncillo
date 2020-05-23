import { ChangeEvent, FocusEvent } from "react";
export interface IInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  dataSelect?: ISelectOption[];
  onChange?: (event: ChangeEvent<any>) => void;
  onBlur?: (event: FocusEvent<any>) => void;
  value?: string | number | string[];
}

interface ISelectOption {
  text: string;
  value: string;
}
