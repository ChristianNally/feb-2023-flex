import React from 'react';
import Game from '../Game';
import { render, fireEvent } from '@testing-library/react';

describe('tests for the Game component', () => {

    test('change cheat state when clicking robot head', () => {

    const { getByTestId, debug } = render(<Game />);
    const robotIcon = getByTestId('robot-head');
    fireEvent.click(robotIcon);
    expect(robotIcon).toHaveClass('cheating');

    debug();

    fireEvent.click(robotIcon);
    expect(robotIcon).not.toHaveClass('cheating');
  });

});
