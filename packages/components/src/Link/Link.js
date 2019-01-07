import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';
import tag from 'clean-tag';
import { color, fontWeight, themeGet, space } from 'styled-system';

const Link = styled(tag.a)`
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

  ${color}
  ${fontWeight}
  ${space}

  ${props => props.underline && css`
    &, &:hover {
      text-decoration: underline;
      color: inherit;
    }
  `}

  ${props => props.hidden && css`
    ${hideVisually()}
  `}
`;

Link.propTypes = {
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...space.propTypes,
  hidden: PropTypes.bool,
  underline: PropTypes.bool,
};

Link.defaultProps = {
  blacklist: Object.keys(Link.propTypes),
  underline: false,
  hidden: false,
};

export default Link;
