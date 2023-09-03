import { render } from '@testing-library/react';

import { HomePage } from './home.page.module';

describe('HomeFeatureShellWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage title='' message=''/>);
    expect(baseElement).toBeTruthy();
  });
});
