import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IFloatButtonProps {
  color: string;
  backgroundColor: string;
  icon: IconDefinition;
  width?: string;
  position?: string;
  clickHandler?: (params: any) => void;
}

export interface IFloatButtonStyleProps {
  color: string;
  backgroundColor: string;
  width?: string;
  position?: string;
}
