import clsx from "clsx";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

const Container = (props: ContainerProps) => {
    const { children, className, ...otherProps } = props;
    return (
        <div
            className={clsx("m-auto w-[86%] max-w-7xl", className)}
            {...otherProps}>
            {children}
        </div>
    );
};

export default Container;
