import { shape, number, string } from 'prop-types';

export const categoryPropTypes = shape({
  id: number,
  name: string,
  slug: string,
});
