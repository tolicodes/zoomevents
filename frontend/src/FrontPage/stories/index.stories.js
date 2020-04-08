import React from 'react';
import FrontPage from '../';
import { generateCategories } from '../generateData'

export default {
  title: 'FrontPage',
  component: FrontPage,
};

export const Default = () => <FrontPage
  categories={generateCategories(10)}
/>;

Default.story = {
  name: 'default view',
};
