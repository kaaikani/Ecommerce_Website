import { Link } from '@remix-run/react';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
};

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
};

type SolidColors = keyof typeof variantStyles.solid;
type OutlineColors = keyof typeof variantStyles.outline;

type CommonProps = {
  className?: string;
  children: React.ReactNode;
};

type SolidButton = {
  variant?: 'solid';
  color?: SolidColors;
} & CommonProps;

type OutlineButton = {
  variant: 'outline';
  color?: OutlineColors;
} & CommonProps;

type RemixLinkProps = {
  href: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'to' | 'className' | 'children'>;

type ButtonProps =
  | (SolidButton & RemixLinkProps)
  | (OutlineButton & RemixLinkProps)
  | (SolidButton & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (OutlineButton & React.ButtonHTMLAttributes<HTMLButtonElement>);

export function Button({ className, ...props }: ButtonProps) {
  const variant = props.variant ?? 'solid';

  let classes = baseStyles[variant];
  if (variant === 'solid') {
    const color = (props.color as SolidColors) ?? 'gray';
    classes = clsx(classes, variantStyles.solid[color]);
  } else {
    const color = (props.color as OutlineColors) ?? 'gray';
    classes = clsx(classes, variantStyles.outline[color]);
  }

  classes = clsx(classes, className);

  if ('href' in props) {
    return (
      <Link to={props.href} className={classes} {...props}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
}
