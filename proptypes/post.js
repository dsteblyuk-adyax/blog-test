import { shape, number, string, arrayOf } from 'prop-types';

export const postPropTypes = shape({
  id: number,
  title: string,
  slug: string,
  categories: arrayOf(number),
  excerpt: string,
  imageUrl: string,
});
