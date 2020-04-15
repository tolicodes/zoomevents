import React from 'react';
import Event from '../Event';

export default {
  title: 'Event',
  component: Event,
};

export const Default = () => <Event
  header_image="https://global-uploads.webflow.com/5e7272fa1dd1574d549b5a65/5e73a458f6ad6246692bb0b1_Tuesday%20Meditation%20Germantown%20Jewish%20Centre.jpg"
  date_start="1585029600"
  name="Tuesday Meditation"
  price={10.29}
/>;

export const Free = () => <Event
  header_image="https://global-uploads.webflow.com/5e7272fa1dd1574d549b5a65/5e73a458f6ad6246692bb0b1_Tuesday%20Meditation%20Germantown%20Jewish%20Centre.jpg"
  date_start="1585029600"
  name="Tuesday Meditation"
  price={0}
/>;


export const ZeroCents = () => <Event
  header_image="https://global-uploads.webflow.com/5e7272fa1dd1574d549b5a65/5e73a458f6ad6246692bb0b1_Tuesday%20Meditation%20Germantown%20Jewish%20Centre.jpg"
  date_start="1585029600"
  name="Tuesday Meditation"
  price={10.00}
/>;