import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/App';


test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(container.innerHTML).toMatch('Help Greta')
})
