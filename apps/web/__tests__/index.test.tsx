// import { render, screen } from '@testing-library/react';

// import Home from '../pages/index';
// // todo
// // import Home from '@/pages/index';

// describe('Home', () => {
//   it('renders a heading', () => {
//     render(<Home />);

//     const heading = screen.getByRole('heading', {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });

import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '../pages';

test('home', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));
  expect(main.getByRole('heading', { level: 1, name: /welcome to next\.js!/i })).toBeDefined();
});
