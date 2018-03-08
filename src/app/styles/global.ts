import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'services/styled-components';

export default () => injectGlobal`
  ${styledNormalize}
`;
