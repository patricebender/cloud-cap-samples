const cds = require('@sap/cds')

const admin = {
  auth: {
    username: 'alice',
  },
}

describe('Bookshop - Update', () => {
  const { expect, PUT } = cds.test()

  test('Update Book', async () => {
    const res = await PUT(
      '/admin/Books(201)', // was Books(2) -> UPSERT
      {
        descr: 'UPDATED',
        author: { ID: 201 },
      },
      admin,
    )
    expect(res.status).to.be.eq(200)

    expect(res.data.author_ID).to.be.eq(201)
    expect(res.data.descr).to.be.eq('UPDATED')
  })
})
