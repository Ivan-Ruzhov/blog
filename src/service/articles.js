import axios from 'axios'

class ArticlesServes {
  _apiBase = 'https://blog.kata.academy/api/'

  async getArticles(page) {
    const params = new URL('articles', this._apiBase)
    params.searchParams.set('limit', '5')
    params.searchParams.set('offset', page)
    const res = await axios.get(params).then((data) => data)
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    return res.data
  }

  async getArticleSlug(slug) {
    const params = new URL(`articles/${slug}`, this._apiBase)
    const res = await axios.get(params).then((data) => data)
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    return res.data
  }

  async registration(name, mail, password) {
    const params = new URL('users', this._apiBase)
    const res = await axios.post(params, {
      user: {
        username: name,
        email: mail,
        password: password,
      },
    })
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    return res.data
  }

  async authorization(mail, password) {
    const params = new URL('users/login', this._apiBase)
    const res = await axios.post(params, {
      user: {
        email: mail,
        password: password,
      },
    })
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    return res.data
  }

  async updateProfile(data) {
    const params = new URL('user', this._apiBase)
    const res = await axios.put(
      params,
      {
        user: {
          email: data.email,
          password: data.password,
          username: data.username,
          image: data.avatar,
        },
      },
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
      }
    )
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    return res.data
  }

  async getUser() {
    const params = new URL('user', this._apiBase)
    const res = await axios.get(params, {
      headers: {
        Authorization: `Token ${sessionStorage.getItem('token')}`,
      },
    })
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    return res.data
  }

  async createArticle(title, description, body, tagList) {
    const params = new URL('articles', this._apiBase)
    const res = await axios.post(
      params,
      {
        article: {
          title: title,
          description: description,
          body: body,
          tagList: tagList,
        },
      },
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
      }
    )
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    console.log(res.data)
    return res.data
  }
  async updateArticle(slug, title, description, body, tagList) {
    const params = new URL(`articles/${slug}`, this._apiBase)
    console.log(params)
    const res = await axios.put(
      params,
      {
        article: {
          title: title,
          description: description,
          body: body,
          tagList: tagList,
        },
      },
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
      }
    )
    if (res.status !== 200) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    console.log(res.data)
    return res.data
  }
  async deleteArticle(slug) {
    const params = new URL(`articles/${slug}`, this._apiBase)
    const res = await axios.delete(params, {
      headers: {
        Authorization: `Token ${sessionStorage.getItem('token')}`,
      },
    })
    console.log(res, res.status)
    if (res.status !== 200 && res.status !== 204) {
      throw new Error(`WARNING!!!! ${res.status}, please check your internet`)
    }
    return res.status
  }
}

export { ArticlesServes }
