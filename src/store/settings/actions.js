import api from './../../api'

const uuidv1 = require('uuid/v1') /* Shouldn't this be an import statement to follow idiomatic vue? */

function addArea ({ commit }, data) {
  const area = data
  const id = uuidv1()
  area.id = id
  api.createArea(area)

  commit('ADD_AREA', area)
}

function addZone ({ commit }, data) {
  const zone = data

  const id = uuidv1()

  zone.id = id

  commit('ADD_ZONE', zone)
}

function addTerritory ({ commit }, data) {
  const territory = data

  const id = uuidv1()

  territory.id = id

  commit('ADD_TERRITORY', territory)
}

function addAction ({ commit }, { data, entityId }) {
  const action = data

  const id = uuidv1()

  action.id = id

  action.fields = []

  commit('ADD_ACTION', { data: action, entityId })
}

function addField ({ commit }, { entityId, actionId, field }) {
  const f = field

  const id = uuidv1()

  f.id = id

  commit('ADD_FIELD', { entityId, actionId, field: f })
}

function addEntity ({ commit }, data) {
  const entity = data

  const slug = uuidv1()

  const actionId = uuidv1()

  entity.slug = slug
  entity.actions = [{ id: actionId, name: 'Logging', fields: [] }]

  commit('ADD_ENTITY', entity)
}

function addUser ({ commit }, data) {
  const user = data

  const id = uuidv1()

  user.id = id

  commit('ADD_USER', user)
}

function deleteUser ({ commit }, id) {
  const userId = id

  commit('DELETE_USER', userId)
}

function deleteTerritory ({ commit }, id) {
  const territoryId = id

  commit('DELETE_TERRITORY', territoryId)
}

function deleteZone ({ commit }, id) {
  const zoneId = id

  commit('DELETE_ZONE', zoneId)
}

function deleteArea ({ commit }, id) {
  const areaId = id

  commit('DELETE_AREA', areaId)
}

function deleteAction ({ commit }, { actionId, entityId }) {
  commit('DELETE_ACTION', { actionId, entityId })
}

function updateUser ({ commit }, data) {
  const user = data

  commit('UPDATE_USER', user)
}

function updateTerritory ({ commit }, territory) {
  commit('UPDATE_TERRITORY', territory)
}

function updateZone ({ commit }, zone) {
  commit('UPDATE_ZONE', zone)
}

function updateArea ({ commit }, area) {
  commit('UPDATE_AREA', area)
}

// function authenticateUser(context, data) {
//   // setTimeout(() => {

//   // }, 3000);
// }

function loadEntities ({ commit }) {
  // Vue.http.get('/entities.json').then(
  //   (response) => {
  //     dispatch('SET_ENTITIES', JSON.parse(response.data));
  //   },
  // );
  setTimeout(() => {
    const x = [
      { entity_name: 'Farm',
        slug: '12345',
        actions: [
          { name: 'Logging', id: 1, fields: [] },
          { name: 'Routine Visit', id: 2, fields: [] },
          { name: 'Sales call', id: 3, fields: [] }
        ]
      },
      { entity_name: 'Market',
        slug: '12335',
        actions: [
          { name: 'Logging', id: 1, fields: [] },
          { name: 'Routine Visit', id: 2, fields: [] },
          { name: 'Sales call', id: 3, fields: [] }
        ]
      },
      { entity_name: 'Outlet', slug: '13345' }
    ]

    const el = [
      {
        entity_id: '12345',
        locations: [
          {
            position: { lat: 10.5, lng: 10.4 }
          },
          {
            position: { lat: 11.1, lng: 11.3 }
          }
        ]
      },
      {
        entity_id: '12335',
        locations: [
          {
            position: { lat: 10.6, lng: 10.1 }
          },
          {
            position: { lat: 11.5, lng: 11.0 }
          }
        ]
      },
      {
        entity_id: '13345',
        locations: [
          {
            position: { lat: 10.0, lng: 10.0 }
          },
          {
            position: { lat: 11.0, lng: 11.0 }
          }
        ]
      }

    ]

    commit('SET_ENTITIES', x)
    commit('SET_ENTITY_LOCATIONS', el)
  }, 3000)
}

function loadTerritories ({ commit }) {
  setTimeout(() => {
    const territories = [
      {
        name: 'Lagos Mainland',
        zone: 'Lagos Left',
        area: 'Lagos',
        slug: '12345',
        users: [
          {
            name: 'Lanre Oyedotun',
            id: '1'
          },
          {
            name: 'Ore Omolaja',
            id: '2'
          },
          {
            name: 'Tofa Olabenjo',
            id: '3'
          }
        ]
      },
      {
        name: 'Lagos Island',
        zone: 'Lagos Central',
        area: 'Lagos',
        slug: '12346',
        users: [
          {
            name: 'Lanre Oyedotun',
            id: '1'
          },
          {
            name: 'Ore Omolaja',
            id: '2'
          },
          {
            name: 'Tofa Olabenjo',
            id: '3'
          }
        ]
      }
    ]

    commit('SET_TERRITORIES', territories)
  }, 3000)
}

export default {
  loadEntities,
  addEntity,
  addField,
  deleteAction,
  loadTerritories,

  addArea,
  addZone,
  addTerritory,
  addUser,

  deleteUser,
  deleteTerritory,
  deleteZone,
  deleteArea,

  updateArea,
  updateTerritory,
  updateZone,
  updateUser,
  addAction
  // authenticateUser,

}
