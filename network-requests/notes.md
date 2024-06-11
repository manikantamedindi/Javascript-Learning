let promise = fetch(url, [options])
- **url** - the url to access
- **options** - optional parameter:methods, headers etc
Note: **Without options**, this is a **simple GET request**, downloading the contents of the url.

**Response** provides multiple **promise-based methods** to access the **body** in various formats:
- response.text() – read the response and **return as text**,
- response.json() – **parse the response as JSON**,
- response.formData() – return the response as **FormData object**,
- response.blob() – return the response as Blob (binary data with type),
- response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data)