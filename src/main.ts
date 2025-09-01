import { PlaywrightCrawler } from "crawlee";

const crawler = new PlaywrightCrawler({
  requestHandler: async ({ page }) => {
    await page.waitForSelector(".collection-block-item");
    const title = await page.$$eval(".collection-block-item", (els) => els.map((el) => el.textContent));
    console.log("Collection Titles:");

    title.forEach((text, idx) => {
        console.log(`${idx + 1}. ${text}`);
    });
  },
});


await crawler.run(["https://warehouse-theme-metal.myshopify.com/collections"]);