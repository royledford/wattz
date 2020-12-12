module.exports = async ({ config, mode }) => {
  // the following will dump the entire config if started with `yarn storybook --debug-webpack`
  // console.dir(config, { depth: null }) || config

  // Return the altered config
  return config
}
