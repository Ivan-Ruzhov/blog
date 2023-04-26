import axios from 'axios'

class ArticlesServes {
  _apiBase = 'https://blog.kata.academy/api/'
  async getArticles(page) {
    const params = new URL('articles', this._apiBase)
    params.searchParams.set('limit', '5')
    params.searchParams.set('offset', page)
    const res = await axios.get(params).then((data) => data)
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet and title films`)
    }
    return res.data
  }
}

export { ArticlesServes }
