import cn from "classnames";

export default function Container(props) {
  return (
    <div className={cn("container", props.className)}>{props.children}</div>
  );
}
