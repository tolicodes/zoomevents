const puppeteer = require("puppeteer");
const fs = require("fs").promises;

import sleep from "./sleep";
import { $evalSelectorAndText } from "./evalSelectorAndText";

const GROUPS_HOME = "https://www.facebook.com/groups/";

export type Group = {
  name: string;
  url: string;
};

export type TScrapeGroupReturn = Group[];

export default async (): Promise<TScrapeGroupReturn> => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const cookiesString = await fs.readFile("./cookies.json");
  const cookies = JSON.parse(cookiesString);
  await page.setCookie(...cookies);

  await page.goto(GROUPS_HOME);

  const SEE_MORE_SELECTOR = "._2fvv a";

  while (true) {
    const success = await $evalSelectorAndText(
      page,
      SEE_MORE_SELECTOR,
      "See More",
      el => el.click()
    );
    if (!success) break;
    // wait for results to load
    await sleep(2000);
  }

  const GROUP_SELECTOR = ".f4g9fmn2 a";

  const URL_PREPEND = "https://facebook.com";

  const groups = await page.$$eval(
    GROUP_SELECTOR,
    (els, URL_PREPEND) =>
      els.map(el => ({
        name: el.textContent,
        url: `${URL_PREPEND}${el.getAttribute("href")}`
      })),
    URL_PREPEND
  );

  browser.close();

  return groups;
};
