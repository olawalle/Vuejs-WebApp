// import { } from './constants';

function remove (array, id) {
  return array.filter(e => e.id !== id)
}

function update (array, element) {
  return array.map((e) => {
    if (e.id === element.id) {
      return element
    }
    return e
  })
}

function ADD_ACTION (state, { data, entityId }) {
  // find the entity
  const entity = state.entities.find(ent => ent.slug === entityId)
  entity.actions.push(data)
}

function DELETE_ACTION (state, { actionId, entityId }) {
  // find the entity
  const entity = state.entities.find(ent => ent.slug === entityId)
  // remove the action from its list of actions
  entity.actions = remove(entity.actions, actionId)
}

function ADD_AREA (state, data) {
  state.areas.unshift(data)
}

function UPDATE_AREA (state, area) {
  state.areas = update(state.areas, area)
}

function DELETE_AREA (state, areaId) {
  state.areas = remove(state.areas, areaId)
}

function ADD_ENTITY (state, data) {
  state.entities.unshift(data)
}

/* Update and Delete Entity Outstanding */

function SET_ENTITIES (state, data) {
  // state.entities = this.$_.concat(state.entities, data);
  state.entities.push(data)
}

// Is this the right naming? There is a Locations model.
function SET_ENTITY_LOCATIONS (state, data) {
  state.entity_locations.push(data)
}

function ADD_FIELD (state, { entityId, actionId, field }) {
  // find entity
  const entity = state.entities.find(ent => ent.slug === entityId)

  // find the specific action
  const action = entity.actions.find(act => act.id === actionId)

  // add to its fields array
  action.fields.push(field)
}

function UPDATE_FIELD (state, { entityId, actionId, field }) {
  // find the entity
  const entity = state.entities.find(ent => ent.slug === entityId)

  // find the action
  const action = entity.actions.find(act => act.slug === actionId)

  action.fields = update(action.fields, field)
}

function DELETE_FIELD (state, { actionId, entityId, fieldId }) {
  // find the entity
  const entity = state.entities.find(ent => ent.slug === entityId)

  // find the action
  const action = entity.actions.find(act => act.slug === actionId)

  // remove the field from its list of fields
  action.fields = remove(action.fields, fieldId)
}

/* Create, Update and Delete Lga, State, (Country), Organization Outstanding */

function ADD_TERRITORY (state, data) {
  state.territories.unshift(data)
}

function UPDATE_TERRITORY (state, territory) {
  state.territories = update(state.territories, territory)
}

function DELETE_TERRITORY (state, territoryId) {
  state.territories = remove(state.territories, territoryId)
}

function SET_TERRITORIES (state, data) {
  state.territories.push(data)
}

function ADD_USER (state, data) {
  state.users.unshift(data)
}

function DELETE_USER (state, user) {
  state.users = remove(state.users, user)
}

function UPDATE_USER (state, user) {
  state.users = update(state.users, user)
}

function ADD_ZONE (state, data) {
  state.zones.unshift(data)
}

function UPDATE_ZONE (state, zone) {
  state.zones = update(state.zones, zone)
}

function DELETE_ZONE (state, zoneId) {
  state.zones = remove(state.zones, zoneId)
}

export default {
  ADD_ACTION,
  DELETE_ACTION,

  ADD_AREA,
  UPDATE_AREA,
  DELETE_AREA,

  ADD_ENTITY,
  SET_ENTITIES,

  SET_ENTITY_LOCATIONS,

  ADD_FIELD,
  UPDATE_FIELD,
  DELETE_FIELD,

  ADD_TERRITORY,
  UPDATE_TERRITORY,
  DELETE_TERRITORY,
  SET_TERRITORIES,

  ADD_USER,
  UPDATE_USER,
  DELETE_USER,

  ADD_ZONE,
  UPDATE_ZONE,
  DELETE_ZONE

}
