function entities (state) {
  return state.entities
}

function entityLocations (state) {
  return state.entity_locations
}

function perEntityLocations (state) {
  return id => state.entity_locations.find(ent => ent.entity_id === id)
}

function entity (state) {
  return id => state.entities.find(ent => ent.slug === id)
}

function action (state) {
  return (slug, id) => {
    const entiti = state.entities.find(ent => ent.slug === slug)
    const actions = entiti.actions
    return actions.find(ac => ac.id === id)
  }
}

function fields (state) {
  return (slug, id) => {
    const entiti = state.entities.find(ent => ent.slug === slug)

    const actions = entiti.actions

    const actn = actions.find(ac => ac.id === id)

    return actn.fields
  }
}

function territories (state) {
  return state.territories
}

function territory (state) {
  return id => state.territories.find(terr => terr.id === id)
}

function areas (state) {
  return state.areas
}

function area (state) {
  return id => state.areas.find(aria => aria.id === id)
}

function zones (state) {
  return state.zones
}

function zone (state) {
  return id => state.zones.find(zon => zon.id === id)
}

function users (state) {
  return state.users
}

function user (state) {
  return id => state.users.find(usr => usr.id === id)
}

function roles (state) {
  return state.roles
}

function role (state) {
  return id => state.roles.find(rol => rol.id === id)
}

export default {
  entities,
  entity,

  entityLocations,
  perEntityLocations,

  action,

  territories,
  territory,

  areas,
  area,

  zones,
  zone,

  users,
  user,

  roles,
  role,

  fields
}
