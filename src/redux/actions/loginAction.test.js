import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as ActionConstant from './../../common/actionConstant'
import * as LoginAction from './loginAction'

const middleWare = [thunk]
const mockStore = configMockStore(middleWare)

describe('Login action', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should create GET_CURRENT_USER action', () => {
    // Mock-data
    const currentUser = {
      role: 'staff',
      username: 'jadhavakshayjj8@gmail.com'
    }
    // Mock Api call
    const mock = new MockAdapter(axios)
    mock.onGet('http://localhost:4500/currentUser').reply(200, currentUser)

    // Create mock data
    const expectedAction = {
      type: ActionConstant.GET_CURRENT_USER,
      currentUser
    }
    // Mock store
    const store = mockStore({ currentUser })
    // @ts-ignore
    return store.dispatch(LoginAction.getCurrentUser()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })

  it('Should logout user', () => {
    // Mock Api call
    const mock = new MockAdapter(axios)
    mock.onPut('http://localhost:4500/currentUser', {}).reply(200, {})

    // Create mock data
    const expectedAction = {
      type: ActionConstant.LOGOUT_USER
    }
    // Mock store
    const store = mockStore({})
    // @ts-ignore
    return store.dispatch(LoginAction.logout()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction)
    })
  })

  it('Should set current user', () => {
    // Mock-data
    const user = {
      role: 'staff',
      username: 'jadhavakshayjj8@gmail.com'
    }

    // Mock Api call
    const mock = new MockAdapter(axios)
    mock.onPut('http://localhost:4500/currentUser', user).reply(200, user)

    // Create mock data
    const expectedAction = {
      type: ActionConstant.SET_CURRENT_USER,
      user
    }
    // Mock store
    const store = mockStore({})
    return (
      store
        // @ts-ignore
        .dispatch(LoginAction.setCurrentUser(user))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedAction)
        })
    )
  })
})
