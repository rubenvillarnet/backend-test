document
  .getElementById('urlForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();

    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    try {
      const response = await fetch('http://localhost:3000/api/url-shortener', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      resultDiv.innerHTML = `<p>Shortened URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a></p>`;
    } catch (error) {
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
