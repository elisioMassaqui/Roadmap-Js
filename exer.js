const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];

async function fetchAllUrls() {
    for (const url of urls) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
}

fetchAllUrls(); // Tudo sequencialmente e sem .then()
