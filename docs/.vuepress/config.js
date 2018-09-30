module.exports = {
  title: 'Today I Learned',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',
        children: ['/']
      },
      {
        title: 'Group 2',
        //collapsable: false,
        children: ['/C/']
      }
    ]
  }
}
