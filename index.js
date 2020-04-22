addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  const url = "https://cfw-takehome.developers.workers.dev/api/variants";

  const response = await fetch(url);
  const data = await response.json();

  const randomNum = Math.floor(Math.random() * 2);

  return await fetch(data.variants[randomNum])

}