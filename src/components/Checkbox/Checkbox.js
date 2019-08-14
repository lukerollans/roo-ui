import React from 'react';
import styled from '@emotion/styled';
import { themeGet } from 'styled-system';
import { rem } from 'polished';
import { Icon } from '../';

const Checkbox = props => (
  <CheckboxWrapper>
    <CheckboxInput type="checkbox" {...props} />
    <CheckboxBorder />
    <CheckboxIcon name="done" />
  </CheckboxWrapper>
);

const CheckboxWrapper = styled.div`
  display: inline-block;
  position: relative;
  font-size: ${themeGet('fontSizes.base')};
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: 0;

  &:focus {
    box-shadow: none;
  }
`;

const CheckboxBorder = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: ${rem('2px')};
  margin-right: ${themeGet('space.2')};
  height: ${rem('20px')};
  width: ${rem('20px')};
  background-color: ${themeGet('colors.white')};
  border: ${themeGet('borders.2')};
  border-color: ${themeGet('colors.greys.alto')};
  border-radius: ${themeGet('radii.default')};

  input:checked + &,
  input:focus + &,
  input:hover + & {
    border-color: ${themeGet('colors.brand.secondary')};
    transition: ${themeGet('transitions.default')};
  }

  input:disabled + & {
    cursor: not-allowed;
    background-color: ${themeGet('colors.greys.alto')};
    border-color: ${themeGet('colors.greys.alto')};
  }
`;

const CheckboxIcon = styled(Icon)`
  position: absolute;
  display: none;
  color: ${themeGet('colors.greys.charcoal')};
  padding: ${themeGet('space.1')};
  top: 0;
  left: -${rem('2px')};

  input:checked ~ & {
    display: block;
  }
`;

export default Checkbox;