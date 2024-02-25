function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

function postData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(data => console.log('Posted:', data))
    .catch(error => console.error('Error:', error));
}

function fetchBlob() {
    fetch('https://www.example.com/image.jpg')
      .then(response => response.blob())
      .then(blob => {
        console.log('Blob received:', blob);
      })
      .catch(error => console.error('Error:', error));
}

function cloneResponse() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        const clonedResponse = response.clone();
        response.json().then(data => console.log('Original Response:', data));
        clonedResponse.json().then(data => console.log('Cloned Response:', data));
      })
      .catch(error => console.error('Error:', error));
}

// cloneResponse();
// fetchBlob();
//   fetchData();
//   postData();