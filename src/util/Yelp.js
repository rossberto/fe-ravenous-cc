const clientId = 'JPrLnyol5AaT0XLf7CYbWg';
const apiKey = '5F0kTJmEIUsrAXKEcpqHA_HvL2uKWA3HZC_iQ73dGgIXgke7fCh84CBP5KpwVMXumfm4BahGo3iaBiNtBi9Q9vexfphH6urta05XSFaaQCs6aphzSQfWwhWSo_6nXHYx';

export const Yelp = {
  search(term, location, sortBy) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    const headerToFetch = {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }
    const urlToFetch = cors + url;
    console.log(urlToFetch);
    return fetch(urlToFetch, headerToFetch).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.hasOwnProperty('businesses')) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.alias,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
}
