import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs';
import SegmentedControl from '../';
import { tabs } from './data';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

storiesOf('SegmentedControl', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'default',
    '',
    () => (
      <Container>
        <SegmentedControl
          tabs={tabs}
          selected={text('selected', 'Tab1')}
          align={select('align', ['left', 'right'])}
          onClick={action('tab selected')}
          disabled={boolean('Disabled', false)}
        />
      </Container>
    )
  );