class ApiService {
    constructor() {
        this.baseUrl = "http://localhost:3000/"
    }

    getCatagories(c) {
        return fetch(`${this.baseUrl}${c}`)
            .then(res => res.json())
    }

    getQuotes(q) {
        return fetch(`${this.baseUrl}categories/${q}`)
            .then(res => res.json())
    }

    fetchCreateNewQuote(phrase, categoryId) {
        return fetch(`${this.baseUrl}quotes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    phrase: phrase,
                    category_id: categoryId
                })
            })
            .then(response => response.json())
    }
}