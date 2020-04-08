import React from 'react';
import BottomContainer from '../BottomContainer';
import Container from '../../Container';


export default {
  title: 'BottomContainer',
  component: BottomContainer,
};

export const Default = () => <Container><BottomContainer
  price={0}
  description="A community for spiritual deepening through chant, Torah study, and twenty minutes of silence. All are welcome. Led by Rabbi Malkah Binah Klein and Rabbi Sheila Weinberg.  Here is the Zoom link to join our meditation group: https://zoom.us/j/529537100  By telephone: Dial (646) 558-8656, enter Meeting ID: 529 537 100"
  date_start="1585029600"
  date_end="1585032300"
  tags={["Health and Wellness"]}
  zoom_link="https://zoom.us/j/529537100"
/></Container>;

