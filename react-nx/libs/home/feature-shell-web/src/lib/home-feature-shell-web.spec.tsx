import { render } from '@testing-library/react';

import {HomeFeatureShellWeb} from './home-feature-shell-web';

describe('HomeFeatureShellWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomeFeatureShellWeb title='' message='' />);
    expect(baseElement).toBeTruthy();
  });
});
