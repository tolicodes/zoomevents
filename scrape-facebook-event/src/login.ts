const puppeteer = require("puppeteer");

const fs = require("fs").promises;

const LOGIN_HOME = "https://www.facebook.com/";

type TLoginReturn = boolean;

export default async (): Promise<TLoginReturn> => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(LOGIN_HOME);

  // user is logged in
  await page.waitFor("#pagelet_composer");

  // ... puppeteer code
  const cookies = await page.cookies();
  await fs.writeFile("./cookies.json", JSON.stringify(cookies, null, 2));
  browser.close();

  return true;
};
