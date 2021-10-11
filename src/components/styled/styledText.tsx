import styled from 'styled-components/native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps
} from 'styled-system';

export interface StyledTextProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    OpacityProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
    ZIndexProps {
  onHoverIn?: () => void;
  onOverOut?: () => void;
}

export const StyledText = styled.Text<StyledTextProps>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${opacity}
  ${position}
  ${space}
  ${typography}
  ${zIndex}
`;
