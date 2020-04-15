import React from 'react';
import Category from '../Category';
import { generateEvents } from '../generateData';

export default {
  title: 'Category',
  component: Category,
};

export const Default = () => <Category
  name="Test Category"
  events={generateEvents(10)}
/>;

