import { Button } from "@material-ui/core"

export interface ButtonProps {
  onClick?: any;
  title?: string;

}

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button style={{background: 'black',  color: 'white'}} onClick={props.onClick}>{props.title}</Button>
  )
}
