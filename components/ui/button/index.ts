import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
    'inline-flex items-center justify-center gap-x-2 whitespace-nowrap border border-transparent rounded-md text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30',
    {
      variants: {
        variant: {
          default: 'bg-primary text-white',
          secondary: 'bg-secondary text-white',
          success: 'bg-success text-white',
          danger: 'bg-danger text-white',
          warning: 'bg-warning text-white',
          info: 'bg-info text-white',
          border: 'border border-border',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'px-[14px] py-2.5 text-sm',
          xs: 'py-1 px-2 text-xs',
          sm: 'py-2 px-3 text-sm',
          md: 'py-4 px-6 text-base',
          lg: 'py-[18px] px-6 text-base',
          icon: 'px-4',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
