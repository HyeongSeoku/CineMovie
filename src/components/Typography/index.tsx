import cx from 'classnames'

import styles from './index.module.scss'

const typeProps = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  B1: 'B1',
  B2: 'B2',
  B3: 'B3',
  C1: 'C1',
  C2: 'C2',
  C3: 'C3',
}

type TypographyTag = 'span' | 'div' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'ul' | 'strong'

export interface TypographyProps {
  type?: keyof typeof typeProps
  tag?: TypographyTag
  bold?: boolean
  weight?: 'regular' | 'medium' | 'bold'
  extendClass: string
  children?: React.ReactNode
}

const Typography = ({
  type = 'B1',
  tag = 'span',
  bold = false,
  weight = 'regular',
  extendClass,
  children,
}: TypographyProps) => {
  const Component = `${tag}` as keyof JSX.IntrinsicElements
  // TODO: CSS classname 처리
  return <Component className={}>{children}</Component>
}

export default Typography
