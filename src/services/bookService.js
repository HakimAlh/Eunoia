const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/books`;

const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const show = async (bookId) => {
    try {
      const res = await fetch(`${BASE_URL}/${bookId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  
const create = async (bookFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  
const deleteBook = async (bookId) => {
    try {
      const res = await fetch(`${BASE_URL}/${bookId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const createChapter = async (bookId, chapterFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${bookId}/chapter`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(chapterFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  
  async function update(bookId, bookFormData) {
    try {
      const res = await fetch(`${BASE_URL}/${bookId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }

  

  export { index, show, create, deleteBook, createChapter, update};