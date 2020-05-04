export interface IButtonFormProps {
  text: string;
  width?: string;
  height?: string;
  clickHandler?: () => void;
}

export interface IButtonFormWrapperProps {
  width?: string;
  height?: string;
  hovered: boolean;
}
