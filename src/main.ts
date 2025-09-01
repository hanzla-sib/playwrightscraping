import { PlaywrightCrawler } from "crawlee";

// const crawler = new PlaywrightCrawler({
//   requestHandler: async ({ page }) => {
//     await page.waitForSelector(".collection-block-item");
//     const title = await page.$$eval(".collection-block-item", (els) => els.map((el) => el.textContent));
//     console.log("Collection Titles:");

//     title.forEach((text, idx) => {
//         console.log(`${idx + 1}. ${text}`);
//     });
//   },
// });

const crawler = new PlaywrightCrawler({
  requestHandler: async ({ page, enqueueLinks, request }) => {
    // console.log(`Processing: ${request.label}`);

    if (request.label === "DETAIL") {
      const title = await page.locator(".product-meta h1").textContent();
      const sku = await page.locator(".product-meta__sku-number").textContent();
      console.log("title:", title);
      console.log("sku:", sku);

      const priceElement = page
        .locator("span.price")
        .filter({ hasText: "$" })
        .first();
      const currentPrice = await priceElement.textContent();
      const rawprice = currentPrice?.split("$")[1]?.trim();
      const price = Number(rawprice?.replace(",", ""));
      console.log("price:", price);
    } else if (request.label === "COLLECTION") {
      const productSelectors = ".product-item > a";
      const nextPageSelector = "a.pagination__next";
      await page.waitForSelector(productSelectors);
      await enqueueLinks({
        selector: productSelectors,
        label: "DETAIL",
      });

      const nextButton = await page.$(nextPageSelector);
      if (nextButton) {
        await enqueueLinks({
          selector: nextPageSelector,
          label: "COLLECTION",
        });
      }
    } else {
      const collectionSelectors = ".collection-block-item";
      await page.waitForSelector(collectionSelectors);
      await enqueueLinks({
        selector: collectionSelectors,
        label: "COLLECTION",
      });
    }
  },
});

await crawler.run(["https://warehouse-theme-metal.myshopify.com/collections"]);
