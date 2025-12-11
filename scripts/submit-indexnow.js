import fetch from 'node-fetch'; // Standard fetch is available in Node 18+ globally, but let's assume global fetch
// If node version is old, we might need node-fetch, but user has node >= 20.9.0 in package.json

const HOST = 'www.iptvprovider.me';
const KEY = '48bc54b9d0744723920c74900a89405d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitUrls(urls) {
    if (!urls || urls.length === 0) {
        console.error('No URLs provided.');
        return;
    }

    console.log(`Submitting ${urls.length} URLs to IndexNow...`);

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                host: HOST,
                key: KEY,
                keyLocation: KEY_LOCATION,
                urlList: urls,
            }),
        });

        if (response.ok) {
            console.log('✅ Success! URLs submitted to IndexNow.');
        } else {
            console.error(`❌ Error: ${response.status} - ${await response.text()}`);
        }
    } catch (error) {
        console.error('❌ Network Error:', error);
    }
}

// Example usage:
// node scripts/submit-indexnow.js https://www.iptvprovider.me/new-page
const args = process.argv.slice(2);
if (args.length > 0) {
    submitUrls(args);
} else {
    console.log('Usage: node scripts/submit-indexnow.js <url1> <url2> ...');
    console.log('Example: node scripts/submit-indexnow.js https://www.iptvprovider.me/ https://www.iptvprovider.me/about');
}
