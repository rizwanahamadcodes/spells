import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { IconType } from "react-icons";

export const button = cva(
    [
        "font-medium rounded-full flex justify-center items-center gap-0.75 h-3 px-1 focus:outline-none active:scale-95 transition-all",
    ],
    {
        variants: {
            variant: {
                solid: "shadow",
                outline: "shadow border-2 ",
                ghost: "",
            },
            colorScheme: {
                primary: "",
                "themed-gray": "",
            },
        },

        compoundVariants: [
            {
                variant: "solid",
                colorScheme: "primary",
                className:
                    "bg-gradient-to-br from-primary to-primary-400  hover:from-primary-600  hover:to-primary text-white",
            },
            {
                variant: "solid",
                colorScheme: "themed-gray",
                className:
                    "bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900",
            },
            {
                variant: "outline",
                colorScheme: "primary",
                className: "text-primary border-primary",
            },
            {
                variant: "outline",
                colorScheme: "themed-gray",
                className:
                    "border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:border-gray-700 hover:text-gray-700 hover:dark:border-gray-300 hover:dark:text-gray-300",
            },
        ],

        defaultVariants: {
            variant: "solid",
            colorScheme: "primary",
        },
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof button> & {
        children?: React.ReactNode;
        className?: string;
    };

export const Button = (props: ButtonProps) => {
    const { children, variant, className, colorScheme, ...otherProps } = props;

    return (
        <button
            className={clsx(button({ variant, colorScheme }), className)}
            {...otherProps}>
            {children}
        </button>
    );
};

type ButtonIconProps = React.ComponentPropsWithoutRef<IconType> & {
    icon: IconType;
    className?: string;
};

export const ButtonIcon = (props: ButtonIconProps) => {
    const { icon: Icon, className, ...otherProps } = props;

    return <Icon className={clsx("text-1.25", className)} {...otherProps} />;
};

export default Button;
