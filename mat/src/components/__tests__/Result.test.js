import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

test('can display high scores from an API', () => {
  const { findByText, getByTestId } = render(<Result status="Waiting" />);
  const highscoreButton = getByTestId('high-scores');
  fireEvent.click(highscoreButton);

  return findByText('Bob', { exact: false } );

});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
