import bcrypt from 'bcrypt'

const data = {
  users: [
    {
      name: 'Amine',
      email: 'benahmed.amine.dev@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true
    },
    {
      name: 'Ibrahim',
      email: 'ibrahim@test.tn',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true
    }
  ],
  products: [
    {
      name        : 'Free-shirt',
      slug        : 'free-shirt',
      image       : '/images/shirt1.jpg',
      banner      : '/images/banner1.jpg',
      price       : 70,
      brand       : 'loiseau',
      description : 'A popular shirt',
      category    : 'Shirts',
      rating      : 4.5,
      numReviews  : 8,
      countInStock: 20,
      isFeatured  : true
    },
    {
      name        : 'Fit-shirt',
      slug        : 'fit-shirt',
      image       : '/images/shirt2.jpg',
      banner      : '/images/banner2.jpg',
      price       : 80,
      brand       : 'loiseau',
      description : 'A popular shirt',
      category    : 'Shirts',
      rating      : 3.2,
      numReviews  : 10,
      countInStock: 20,
      isFeatured  : true
    },
    {
      name        : 'Slim-shirt',
      slug        : 'slim-shirt',
      image       : '/images/shirt3.jpg',
      banner      : '/images/banner3.jpg',
      price       : 120,
      brand       : 'loiseau',
      description : 'A popular shirt',
      category    : 'Shirts',
      rating      : 4.5,
      numReviews  : 25,
      countInStock: 4,
      isFeatured  : true
    },
    {
      name        : 'Free-shirt',
      slug        : 'free-shirt-2',
      image       : '/images/shirt1.jpg',
      banner      : '/images/banner1.jpg',
      price       : 70,
      brand       : 'loiseau',
      description : 'A popular shirt',
      category    : 'Shirts',
      rating      : 4.5,
      numReviews  : 8,
      countInStock: 20,
      isFeatured  : true
    },
    {
      name        : 'Fit-shirt',
      slug        : 'fit-shirt-2',
      image       : '/images/shirt2.jpg',
      banner      : '/images/banner2.jpg',
      price       : 80,
      brand       : 'loiseau',
      description : 'A popular shirt',
      category    : 'Shirts',
      rating      : 3.2,
      numReviews  : 10,
      countInStock: 20,
      isFeatured  : true
    },
    {
      name        : 'Slim-shirt',
      slug        : 'slim-shirt-2 ',
      image       : '/images/shirt3.jpg',
      banner      : '/images/banner3.jpg',
      price       : 120,
      brand       : 'loiseau',
      description : 'A popular shirt',
      category    : 'Shirts',
      rating      : 4.5,
      numReviews  : 25,
      countInStock: 4,
      isFeatured  : true
    }
  ]
}

export default data