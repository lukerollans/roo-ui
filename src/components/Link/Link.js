import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { hideVisually } from 'polished';
import { color, typography, space, compose } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import propTypes from '@styled-system/prop-types';
import omitProps from '../omitProps';

const Link = styled('a', omitProps(['hidden', 'underline']))`
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: ${themeGet('colors.ui.link')};

  &:hover {
    color: ${themeGet('colors.ui.linkHover')};
  }

  &:focus {
    outline: ${themeGet('borders.2')} ${themeGet('colors.brand.secondary')};
  }

  ${compose(
    color,
    typography,
    space,
  )}

  ${props =>
    props.underline &&
    css`
      &,
      &:hover {
        text-decoration: underline;
        color: inherit;
      }
    `}

  ${props =>
    props.hidden &&
    css`
      ${hideVisually()};
    `};
`;

Link.propTypes = {
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.space,
  hidden: PropTypes.bool,
  underline: PropTypes.bool,
};

Link.defaultProps = {
  underline: false,
  hidden: false,
};

Link.displayName = 'Link';

export default Link;
