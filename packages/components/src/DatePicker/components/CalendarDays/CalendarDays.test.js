import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { addDays } from 'date-fns';

import CalendarDays from '.';

describe('<CalendarDays />', () => {
  let wrapper;

  const startDate = new Date(2018, 7, 1, 10, 33, 30, 0);

  const props = {
    monthName: 'Jul',
    month: 7,
    year: 2018,
    stacked: true,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    weeks: [
      [
        { date: startDate },
        { date: addDays(startDate, 1) },
        { date: addDays(startDate, 2) },
        { date: addDays(startDate, 3) },
        { date: addDays(startDate, 4) },
        { date: addDays(startDate, 5) },
        { date: addDays(startDate, 7) },
      ],
      [
        { date: addDays(startDate, 7) },
        { date: addDays(startDate, 8) },
        { date: addDays(startDate, 9) },
        { date: addDays(startDate, 10) },
        { date: addDays(startDate, 11) },
        { date: addDays(startDate, 12) },
        { date: addDays(startDate, 14) },
      ]],
    getDateProps: jest.fn,
  };

  const setup = (params = {}) => {
    props.isInRange = params.isInRange;
    props.onMouseEnterOfDay = params.onMouseEnterOfDay;
    wrapper = shallowWithTheme(<CalendarDays {...props} />, theme);
  };

  it('renders correctly', () => {
    setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('<CalendarDay />', () => {
    describe('highlighted', () => {
      describe('when isInRange is false', () => {
        it('props.highlighted is false', () => {
          setup({
            isInRange: () => false,
          });
          expect(wrapper.find('CalendarDay').first().prop('highlighted')).toEqual(false);
        });
      });

      describe('when isInRange is true', () => {
        it('props.highlighted is true', () => {
          setup({
            isInRange: () => true,
          });
          expect(wrapper.find('CalendarDay').first().prop('highlighted')).toEqual(true);
        });
      });
    });
  });
});
