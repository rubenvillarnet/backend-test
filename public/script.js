const form = document.getElementById('urlForm');

const suceedMessage = (url) =>
  `<p>Shortened URL: <a href="${url}" target="_blank">${url}</a></p>`;

const errorMessage = (message) => `<p>Error: ${message}</p>`;

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const url = document.getElementById('urlInput').value;
  const result = document.getElementById('result');

  try {
    const response = await axios.post(
      'http://localhost:3000/api/url-shortener',
      { url },
    );
    result.innerHTML = suceedMessage(response.data.shortUrl);
  } catch (error) {
    console.error('Error:', error);
    result.innerHTML = errorMessage(error.message);
  }
});
