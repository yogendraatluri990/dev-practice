import { render } from '@testing-library/react';

import AdUniverseFields from './ad-universe-fields';

describe('AdUniverseFields', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdUniverseFields />);
    expect(baseElement).toBeTruthy();
  });
});
