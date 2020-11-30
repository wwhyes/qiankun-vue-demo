const apps = [
  {
    name: 'primary',
    entry: 'http://localhost:9001'
  },
  {
    name: 'secondary',
    entry: 'http://localhost:9002'
  }
]

const appsRoutes = apps.map(app => {
  const { name } = app

  return {
    name,
    path: name,
    meta: { name },
    // For microApp's router mode is history
    children: [{ path: '*' }]
  }
})

export default apps
export { appsRoutes }
