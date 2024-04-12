type DividerProps = {
    classNames?: string;
}
export const Divider = ({classNames}: DividerProps) => <div className={`divider my-0 lg:my-6 ${classNames}`}/>