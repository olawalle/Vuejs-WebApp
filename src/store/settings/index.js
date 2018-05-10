import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  entities: [],
  entity_locations: [],
  territories: [],
  zones: [],
  areas: [],
  users: [],
  roles: [{ id: 0, name: 'web' }, { id: 1, name: 'field' }]
}

export default { state, mutations, actions, getters }

