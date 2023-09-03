import { render } from '@testing-library/react';

import AdUniverseTypes from './ad-universe-types';

describe('AdUniverseTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdUniverseTypes />);
    expect(baseElement).toBeTruthy();
  });
});
