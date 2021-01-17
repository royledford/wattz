import Text from './Text'

describe('Text', () => {
  it('matches the snapshot', () => {
    // NOTE: I'm just testing that it renders and not doing all the permutations, there are too many
    const wrapper = window.shallow(<Text>Sample text</Text>)
    expect(wrapper).toMatchSnapshot()
  })
})
