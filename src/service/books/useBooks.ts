
import api from "../axious";

const headers =  {
    "Content-Type": "application/json",
}

const useBooks = {
    search: (data: string) => api.get(`/books/${data}`, {headers}),
    createBook: () => api.post('/books', {headers}),
    getBooks: () => api.get('/books', {headers}),
    editBook: (id: number) => api.patch(`/books/${id}`, {headers}),
    deleteBook: (id: number) => api.delete(`/books/${id}`, {headers}),
}

export default useBooks;