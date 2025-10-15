const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017'
const dbName = 'jwelary-store'

async function initDatabase() {
  const client = new MongoClient(uri)
  
  try {
    await client.connect()
    const db = client.db(dbName)
    
    // Create admin user
    await db.collection('users').insertOne({
      name: 'Admin User',
      email: 'admin@jwelary.com',
      password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uV8K', // password: admin123
      role: 'admin',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    // Create sample product
    await db.collection('products').insertOne({
      name: 'Diamond Necklace',
      description: 'Beautiful diamond necklace',
      price: 1299,
      category: 'NECKLACES',
      images: ['/nacklace1.webp'],
      stock: 10,
      featured: true,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    console.log('Database initialized successfully!')
    console.log('Admin login: admin@jwelary.com / admin123')
    
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await client.close()
  }
}

initDatabase()