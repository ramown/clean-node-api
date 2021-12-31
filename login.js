const express = require('express')
const Router = express.Router()

module.exports = () => {
  const router = new SignUpRouter()
  router.post('/signup', ExpressRouterAdapter.adapt(router))
}

class ExpressRouterAdapter {
  static adapt (router) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body
      }
      const httpResponse = await Router.route(httpRequest)
      res.status(httpResponse.statusCode).json()
    }
  }
}

// Presentation
// signup-router
class SignUpRouter {
  async route (httpRequest) {
    const { email, password, repeatPassword } = httpRequest.body
    const user = new SignUpUseCase().signUp(email, password, repeatPassword)
    return {
      statusCode: 200,
      body: user
    }
  }
}

// Domain
// signup-usecase
class SignUpUseCase {
  async signUp (email, password, repeatPassword) {
    if (password === repeatPassword) {
      if (password === repeatPassword) {
        new AddAccountRepository().add(email, password)
      }
    }
  }
}

// Infra
// add-account-repo
const mongoose = require('mongoose')
const AccountModel = mongoose.model('Account')

class AddAccountRepository {
  async add (email, password, repeatPassword) {
    if (password === repeatPassword) {
      const user = await AccountModel.create({ email, password })
      return user
    }
  }
}
