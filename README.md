# Playwright Scraping

This project is a web scraping tool built with [Playwright](https://playwright.dev/) for automated data extraction. It is designed to efficiently crawl websites and store the scraped data in structured formats for further analysis or use.

## Features
- Automated web scraping using Playwright
- Data storage in JSON format
- Easy to configure and extend

## Installation

1. **Clone the repository:**
	```powershell
	git clone <repository-url>
	cd <folder name>
	```

2. **Install dependencies:**
	```powershell
	npm install
	```

## How to Run

To start the scraper, use:

```powershell
npm start
```

Or, if you want to run the main script directly:

```powershell
npm run build  # If using TypeScript, build first
node dist/main.js  # Or use ts-node src/main.ts if not building
```

## Project Structure

- `src/` - Source code
- `storage/` - Scraped data and state
- `Dockerfile` - For containerized runs

## Requirements
- Node.js (v16 or newer recommended)
- npm

## Docker (Optional)

To run using Docker:

```powershell
docker build -t playwrightscraping .
docker run --rm playwrightscraping
```

---
Feel free to modify the code to suit your scraping needs!
# Getting started with Crawlee

This example uses `PlaywrightCrawler` to recursively crawl https://crawlee.dev using the browser automation library [Playwright](https://playwright.dev).

You can find more examples and documentation at the following links:

- [Step-by-step tutorial](https://crawlee.dev/js/docs/introduction) for Crawlee
- `PlaywrightCrawler` [API documentation](https://crawlee.dev/js/api/playwright-crawler/class/PlaywrightCrawler)
- Other [examples](https://crawlee.dev/js/docs/examples/playwright-crawler)
