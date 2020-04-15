import React from 'react';
import TopContainer from '../TopContainer';
import Container from '../../Container';

export default {
  title: 'TopContainer',
  component: TopContainer,
};

export const Default = () => <Container><TopContainer
  name="Tuesday Meditation"
  header_image="https://global-uploads.webflow.com/5e7272fa1dd1574d549b5a65/5e73a458f6ad6246692bb0b1_Tuesday%20Meditation%20Germantown%20Jewish%20Centre.jpg"
  date_start="1585029600"
  creator="Germantown Jewish Center"
  rsvp_link="https://b-www.facebook.com/events/205261567227589/?event_time_id=205261570560922"
/></Container>;
