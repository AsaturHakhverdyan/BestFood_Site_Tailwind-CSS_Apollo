
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
   type Products {
      id: ID
      name: String
      category: String
      price: Int
      image: String
   },
   type Query {
      products: [Products]
   },
`;

const products = [
   {
      id: 1,
      name: 'Double Cheeseburger',
      category: 'Burger',
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 30,
   },
   {
      id: 2,
      name: 'Cheeseburger',
      category: 'Burger',
      image: 'https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 23,
   },
   {
      id: 3,
      name: 'Big Pizza',
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 15,
   },
   {
      id: 4,
      name: 'Small Pizza',
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 10,
   },
   {
      id: 5,
      name: 'French Fries',
      category: 'Fries',
      image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 10,
   },
   {
      id: 6,
      name: 'Barbiqu',
      category: 'Another',
      image: 'https://images.pexels.com/photos/109641/pexels-photo-109641.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 230,
   },
   {
      id: 7,
      name: 'Salad',
      category: 'Another',
      image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 5,
   },
   {
      id: 8,
      name: 'Mushroom Burger',
      category: 'Burger',
      image: 'https://images.pexels.com/photos/5554607/pexels-photo-5554607.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 40,
   },
   {
      id: 9,
      name: 'Becon Cheeseburger',
      category: 'Burger',
      image: 'https://images.pexels.com/photos/4392661/pexels-photo-4392661.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 30,
   },
   {
      id: 10,
      name: 'Feta Spinich',
      category: 'Another',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 30,
   },
   {
      id: 11,
      name: 'Fake Pizza',
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 130,
   },
   {
      id: 12,
      name: 'Fries yami',
      category: 'Fries',
      image: 'https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 43,
   },
   {
      id: 13,
      name: 'Saled Cesar',
      category: 'Another',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 55,
   },
   {
      id: 14,
      name: 'Saled Chicken',
      category: 'Another',
      image: 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 70,
   },
]


const resolvers = {
   Query: {
      products: () => products,
   },
};

const server = new ApolloServer({
   typeDefs,
   resolvers,
   csrfPrevention: true,
   cache: 'bounded',
});

server.listen().then(({ url }) => {
   console.log(`Server runing at port ${url}`);
});