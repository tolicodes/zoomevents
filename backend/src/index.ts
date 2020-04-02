import "reflect-metadata";
import { createConnection } from "typeorm";

import Event from "./entity/Event";
import Tag from "./entity/Tag";

(async () => {
  try {
    const connection = await createConnection({
      type: "mysql",
      host: "db",
      port: 3306,
      username: "root",
      password: "123",
      database: "zoomevents",
      synchronize: true,
      logging: true,
      entities: [__dirname + "/entity/**/*.js"],
      insecureAuth: true
    });

    const tag = new Tag({
      name: "Health and Wellness"
    });

    let event = new Event({
      name: "Tuesday Meditation",
      price: 0,
      header_image:
        "https://global-uploads.webflow.com/5e7272fa1dd1574d549b5a65/5e73a458f6ad6246692bb0b1_Tuesday%20Meditation%20Germantown%20Jewish%20Centre.jpg",
      description:
        "A community for spiritual deepening through chant, Torah study, and twenty minutes of silence. All are welcome. Led by Rabbi Malkah Binah Klein and Rabbi Sheila Weinberg.  Here is the Zoom link to join our meditation group: https://zoom.us/j/529537100  By telephone: Dial (646) 558-8656, enter Meeting ID: 529 537 100",
      date_start: new Date(1585029600 * 1000),
      date_end: new Date(1585032300 * 1000),
      creator: "Germantown Jewish Center",
      rsvp_link:
        "https://b-www.facebook.com/events/205261567227589/?event_time_id=205261570560922",
      slug: "tuesday-meditation",
      tags: [tag],
      zoom_link: "https://zoom.us/j/529537100"
    });

    await event.save();

    const events = await connection.manager.find(Event);
    console.log("Loaded users: ", events);
  } catch (error) {
    console.log(error);
  }
})();
