import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SelectStyle = styled.div`
  /* Select label default style */
  .reusecore__field-label {
    color: ${themeGet('colors.text', '#294859')};
    font-size: 16px;
    font-weight: 400;
    margin-top: 18px;
    margin-bottom: 8px;
    
  }

  /* Select label style when labelPosition on left */
  &.label_left {
    display: flex;
    align-items: center;
    .reusecore__field-label {
      margin-right: ${themeGet('space.3', '10')}px;
      
    }
  }

  /* Select label style when labelPosition on right */
  &.label_right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .reusecore__field-label {
      margin-left: ${themeGet('space.3', '10')}px;
    }
  }

  /* Switch label style when labelPosition on top || bottom */
  &.label_top {
    .reusecore__field-label {
      display: flex;
      margin-bottom: ${themeGet('space.2', '8')}px;
    }
  }
  &.label_bottom {
    .reusecore__field-label {
      display: flex;
      margin-top: ${themeGet('space.2', '2')}px;
    }
  }
`;

SelectStyle.displayName = 'SelectStyle';

SelectStyle.defaultProps = {
  as: 'div',
};

export default SelectStyle;
