// server/index.js

const path = require('path');
const express = require("express");
const db = require("./database.js");
const { graphqlHTTP } = require('express-graphql');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const PORT = process.env.PORT || 3001;

const app = express();

const lgas = [
	{ id: 1, name: 'Cessnock City Council', boundsDataJSON: 'CessnockCityCouncil.json' },
	{ id: 2, name: 'Lake Macquarie City Council', boundsDataJSON: 'LakeMacquarieCityCouncil.json' },
	{ id: 3, name: 'Maitland City Council', boundsDataJSON: 'MaitlandCityCouncil.json' },
	{ id: 4, name: 'Newcastle City Council', boundsDataJSON: 'NewcastleCityCouncil.json' },
	{ id: 5, name: 'Port Stephen Council', boundsDataJSON: 'PortStephensCouncil.json' },
]

function getLGABounds(id){

  const test = [
    { id: 1, name: 'Cessnock City Council', boundsDataJSON: 'CessnockCityCouncil.json' },
    { id: 2, name: 'Lake Macquarie City Council', boundsDataJSON: 'LakeMacquarieCityCouncil.json' },
    { id: 3, name: 'Maitland City Council', boundsDataJSON: 'MaitlandCityCouncil.json' },
    { id: 4, name: 'Newcastle City Council', boundsDataJSON: 'NewcastleCityCouncil.json' },
    { id: 5, name: 'Port Stephen Council', boundsDataJSON: 'PortStephensCouncil.json' },
  ]

  const obj = test.find(test => test.id === id);

  return obj;
}



const LGAType = new GraphQLObjectType({
  name: 'LGA',
  description: 'This represents meta data for an LGA',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) }
  })
})

const LGABoundsType = new GraphQLObjectType({
  name: 'LGABounds',
  description: 'This represents bounds data for an LGA',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    lga: {
      type: LGAType,
      description: 'A single LGA',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => lgas.find(lga => lga.id === args.id)
    },
    lgaData: {
      type: LGABoundsType,
      description: 'A single LGA',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => getLGABounds(args.id)
        
    },
    lgas: {
      type: new GraphQLList(LGAType),
      description: 'List of All LGAs',
      resolve: () => lgas
    }
  })
})


const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get("/api/:dataset", (req, res) => {
    const geoJSON = require('./GeoJSON/'+req.params.dataset+'.json')
    res.json(geoJSON);
});

app.get("/users", (req, res, next) => {
    const sql = "select * from user"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

