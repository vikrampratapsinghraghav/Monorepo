export const fetchPosts = async (page, limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    return response.json();
  };