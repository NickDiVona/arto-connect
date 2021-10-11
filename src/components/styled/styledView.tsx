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
  zIndex,
  ZIndexProps
} from 'styled-system';

export interface StyledViewProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    OpacityProps,
    PositionProps,
    SpaceProps,
    ZIndexProps {
  onHoverIn?: () => void;
  onOverOut?: () => void;
}

export const StyledView = styled.View<StyledViewProps>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${opacity}
  ${position}
  ${space}
  ${zIndex}
`;
