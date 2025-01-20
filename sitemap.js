const fs = require("fs");
const path = require("path");

const blogDirectory = path.join(__dirname, "blog");
const sitemapPath = path.join(__dirname, "sitemap.xml");

function buildSitemap(dir, baseUrl) {
    let urls = [`https://andy-gallagher.com/`];

    function findIndexFiles(directory) {
        const files = fs.readdirSync(directory);

        files.forEach((file) => {
            const fullPath = path.join(directory, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                findIndexFiles(fullPath);
            } else if (file === "index.html") {
                const relativePath = path.relative(blogDirectory, fullPath);
                const url = `${baseUrl}/${relativePath.replace(
                    /index\.html$/,
                    ""
                )}`;
                urls.push(url);
            }
        });
    }

    findIndexFiles(dir);

    return urls;
}

function generateSitemap(urls) {
    const header =
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    const footer = "</urlset>";
    const urlEntries = urls
        .map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
        .join("\n");

    return `${header}${urlEntries}\n${footer}`;
}

const baseUrl = "https://andy-gallagher.com/blog";
const urls = buildSitemap(blogDirectory, baseUrl);
const sitemap = generateSitemap(urls);

fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log("sitemap generated!");
