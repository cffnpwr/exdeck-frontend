import { JSX, JSXElement, mergeProps, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

interface BoxProps<T extends keyof HTMLElementTagNameMap> extends JSX.HTMLAttributes<T> {
  children?: any
  component?: T
}

export const Box = <T extends keyof HTMLElementTagNameMap>(props: BoxProps<T>): JSXElement => {
  const [classList, other] = splitProps(props, ['classList'])
  const mergedOther = mergeProps({ component: 'div' }, other)
  return <Dynamic {...mergedOther} classList={mergeProps({ box: true }, classList.classList)} />
}