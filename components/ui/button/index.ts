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
          // outline: 'border border-secondary bg-gray-100',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'px-4 py-2.5',
          xs: 'rounded px-2',
          sm: 'rounded-md px-3',
          lg: 'rounded-md px-8',
          icon: '',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
